import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("it works");
});

app.listen(5000, () =>
  console.log("Server is running on port http://localhost:5000")
);
