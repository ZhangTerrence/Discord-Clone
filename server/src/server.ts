import express from "express";
import cors from "cors";

import "dotenv/config";
import env from "./utils/validateEnv";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Mongoose connected.")
    app.listen(env.PORT, () => {
      console.log(`Listening on port ${env.PORT}`);
    })
  })
  .catch(console.error);