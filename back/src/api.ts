import express from "express";

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({
    samples: 14,
    multiplicationFactor: 25,
  });
});

export default app;
