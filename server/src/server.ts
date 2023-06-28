import express from "express";
import cors from "cors";

import "dotenv/config";
import env from "./utils/validate";
import mongoose from "mongoose";

import { userRouter } from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRouter);

mongoose.connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Mongoose connected.")
    app.listen(env.PORT, () => {
      console.log(`Listening on port ${env.PORT}`);
    })
  })
  .catch(console.error);