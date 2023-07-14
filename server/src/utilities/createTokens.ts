import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import env from "./validateEnv";

export interface DecodedTokenInterface {
  _id: mongoose.Types.ObjectId
}

export const createAccessToken = (_id: mongoose.Types.ObjectId) => {
  return jwt.sign({ _id }, env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' });
}

export const createRefreshToken = (_id: mongoose.Types.ObjectId) => {
  return jwt.sign({ _id }, env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });
}