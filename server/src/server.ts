import express from "express";
import cors from "cors";

import "dotenv/config";
import env from "./utils/validate";
import mongoose from "mongoose";
import multer from "multer";
import cloudinary from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const app = express();

app.use(cors());
app.use(express.json());
cloudinary.v2.config({
  cloud_name: env.CLOUD_NAME,
  api_key: env.CLOUD_API_KEY,
  api_secret: env.CLOUD_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    folder: "MERN",
    format: async () => "png",
    public_id: (req, file) => file.filename,
  }
})

export const upload = multer({
  storage: storage
})

import { userRouter } from "./routes/userRoutes";
app.use("/api/users", userRouter);

mongoose.connect(env.MONGO_CONNECTION)
  .then(() => {
    console.log("Mongoose connected.")
    app.listen(env.PORT, () => {
      console.log(`Listening on port ${env.PORT}`);
    })
  })
  .catch(console.error);