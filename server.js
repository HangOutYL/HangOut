import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const PORT = 8080;

dotenv.config();
// Middlewares

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello From Server");
});
app.get("/", (req, res) => {});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(PORT, () =>
  console.log(`Server is listening on "http://localhost:${PORT}"`)
);
