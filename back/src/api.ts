import express from "express";
import type { Config } from "./interfaces/Config";
import { random } from "./utils";

const app = express.Router();

const randomConfig = (req: express.Request, res: express.Response): void => {
  const config: Config = {
    samples: random(0, 200),
    multiplicationFactor: random(0, 100, 2),
  };
  res.json(config);
};

app.get("/random-config", randomConfig);

export default app;
