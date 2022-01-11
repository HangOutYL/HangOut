import express from "express";
const app = express();
const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.listen(PORT, () => console.log(`Server is listening on PORT${PORT}`));
