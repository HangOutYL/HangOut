import express from "express";
// import mongoose from "mongoose";
import Users from "./models/users.js";
// import RefreshTokens from "./models/refreshTokens.js";
import cors from "cors";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JsonWebTokenError } from "jsonwebtoken";

const app = express();
app.use(express.json());

dotenv.config();

const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;

// Express Middlewares

app.use(cors());
app.use(express.json());

let refreshTokens = [];

app.post("/api/token", async (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken === null) {
    res.sendStatus(401);
  }
  if (!refreshTokens.includes(refreshToken)) {
    res.sendStatus(403);
  }
  jwt.verify(refreshToken, process.env.REFRESH_ACCESS_TOKEN, (err, user) => {
    if (err) {
      res.sendStatus(403);
    }
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});

app.post("/api/users/login", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user === null) {
    res.status(500).send("cannot find user");
  }

  const validUser = await bcrypt.compare(req.body.password, user.password);
  if (validUser) {
    console.log("success");
    const username = req.body.email;
    const user = { name: username };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_ACCESS_TOKEN);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
    // res.status(200).send("success");
  } else {
    res.status(500).send("failed");
    console.log("failed");
  }
});

async function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15m" });
}

app.listen(7070, () => {
  console.log("authServer up and running");
});
