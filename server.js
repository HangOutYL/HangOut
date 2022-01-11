import express from "express";
const app = express();
const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From Server");
});
app.get("/", (req, res) => {});
app.post("/", (req, res) => {});
app.put("/", (req, res) => {});
app.delete("/", (req, res) => {});

app.listen(PORT, () => console.log(`Server is listening on PORT${PORT}`));
