import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import Products from "./models/products.js";
import Users from "./models/users.js";
import Posts from "./models/posts.js";
import Tokens from "./models/tokens.js";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Getting Initial Products
async function initProducts() {
  const productsDb = await Products.find();
  if (!productsDb.length) {
    const res = await fetch("https://api.npoint.io/ac214e395851de88f4f6");
    const data = await res.json();
    const mapped = data.map((p) => ({ ...p }));
    await Products.insertMany(mapped, () => {
      console.log("successfully Populated Products DB");
    });
  }
}

async function initUsers() {
  const usersDB = await Users.find();
  if (!usersDB.length) {
    const res = await fetch("https://api.npoint.io/c5ae04d9d269b58ed569");
    const data = await res.json();
    const mappedUsers = data.map((u) => ({ ...u }));
    Users.insertMany(mappedUsers, () => {
      console.log("successfully populated users DB");
    });
  }
}
// Express Middlewares

app.use(cors());
app.use(express.json());

// Express Routing

app.get("/api/", (req, res) => {
  res.send("Hello");
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findById(id);
  res.status(200).send(product);
});

app.post("/api/products", async (req, res) => {
  const body = req.body;
  const product = await Products.create({ ...body });
  res.status(200).send(product);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Products.findByIdAndRemove(id);
  res.status(200).send(product);
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = await Products.findByIdAndUpdate(id, { ...body });
  const updatedProduct = await Products.findById(id);
  res.status(200).send(updatedProduct);
});

// users

app.get("/api/users", async (req, res) => {
  try {
    const users = await Users.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send("error connecting to db", err);
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new Users({ name, email, password: hashedPassword });
    await user.save();
    res.status(200).send(user);
  } catch {
    res.status(500).send();
  }
});

// user login authentication

app.post("/api/users/login", async (req, res) => {
  console.log("login", req.body.email);
  const user = await Users.findOne({ email: req.body.email });
  if (user === null) {
    res.status(500).send("cannot find user");
    return;
  }

  const validUser = await bcrypt.compare(req.body.password, user.password);
  if (validUser) {
    console.log("success");
    const username = req.body.email;
    const user = { name: username };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_ACCESS_TOKEN);
    const refToken = new Tokens({ refreshToken });
    await refToken.save();
    res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      })
      .json({ accessToken, refreshToken });
  } else {
    res.status(500).send("failed");
  }
});

//generating access token

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "20s" });
}

// creating new access token with refresh token

app.post("/api/tokens", async (req, res) => {
  const token = req.body.token;
  const refreshToken = await Tokens.findOne({
    refreshToken: token,
  });
  console.log("refresh", token);
  if (token === null) {
    res.sendStatus(401);
    return;
  }
  if (!refreshToken) {
    res.sendStatus(403);
  }
  jwt.verify(
    refreshToken.refreshToken,
    process.env.REFRESH_ACCESS_TOKEN,
    (err, user) => {
      if (err) {
        throw err;
      }
      const accessToken = generateAccessToken({ name: user.name });
      res.json({ accessToken });
    }
  );
});

// posts

app.post("/api/posts", async (req, res) => {
  try {
    const { email, favorites, userDetails } = req.body;
    const post = new Posts({ username: email, favorites, userDetails });
    await post.save();
    res.status(200).send(post);
  } catch {
    res.status(500).send();
  }
});

// authorizing access to certain posts

app.get("/api/posts", authenticateToken, async (req, res) => {
  try {
    const posts = await Posts.find();
    res
      .status(200)
      .json(posts.filter((post) => post.username === req.user.name));
  } catch (err) {
    res.status(500).send();
  }
});

// authenticating valid token

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    res.sendstatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.delete("/api/users/logout", async (res, req) => {
  const newTokens = await Tokens.findOneAndDelete({
    refreshToken: req.body.token,
  });
  res.status(204).send(newTokens);
});

// app.delete("/api/users/:id", async (req, res) => {
//   const { _id } = req.params;
//   const user = await Users.findByIdAndRemove(_id);
//   res.status(200).send(user);
// });

app.get("*", (req, res) => {
  res.status(200).send("*");
});
// Mongoose Connection To DB

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  () => {
    app.listen(process.env.PORT || 8080, () => {
      initProducts();
      initUsers();
      console.log("Server up and running");
    });
  }
);
