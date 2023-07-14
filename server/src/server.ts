import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { corsOptions } from "./config/corsOptions";
import cookieParser from "cookie-parser";
import "dotenv/config";
import env from "./utilities/validateEnv";

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

import { authRoutes } from "./routes/authRoutes";
import { userRoutes } from "./routes/userRoutes";

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

mongoose.connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Mongoose connected.")
    app.listen(env.PORT, () => {
      console.log(`Listening on port ${env.PORT}`);
    })
  })
  .catch(console.error);