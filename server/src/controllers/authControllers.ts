import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/userModel";
import expressAsyncHandler from "express-async-handler";
import { type DecodedTokenInterface, createAccessToken, createRefreshToken } from "../utilities/createTokens";
import type { JwtVerifyDecodedType, JwtVerifyErrorType } from "../middleware/verifyToken";
import jwt from "jsonwebtoken";
import env from "../utilities/validateEnv";

export const signupUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const _id = new mongoose.Types.ObjectId();
  const user = await User.signup(_id, username, email, password);
  const accessToken = createAccessToken(user._id);
  const refreshToken = createRefreshToken(user._id);

  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.status(200).json({accessToken});
})

export const loginUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.login(email, password);
  const accessToken = createAccessToken(user._id);
  const refreshToken = createRefreshToken(user._id);
  
  res.cookie('jwt', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  res.status(200).json({accessToken});
})

export const refreshAccessToken = async (req: Request, res: Response) => {
  const cookies = req.body;
  if (!cookies?.jwt) {
    res.status(401).json({ message: "Unauthorized" });
  }
  const refreshToken = cookies.jwt;
  jwt.verify(
    refreshToken, 
    env.REFRESH_TOKEN_SECRET,
    async (err: JwtVerifyErrorType, decoded: JwtVerifyDecodedType) => {
      if (err) {
        res.status(403).json({ message: 'Forbidden' });
        return;
      }

      const user = await User.findOne({ _id: (decoded as DecodedTokenInterface)._id }).exec()

      if (!user) {
        res.status(401).json({ message: 'Unauthorized' });
        return;
      } 

      const accessToken = jwt.sign({_id: user._id}, env.ACCESS_TOKEN_SECRET, {expiresIn: '10m'})
      res.json({ accessToken })
    }
  )
}

export const logout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies.jwt) {
    res.status(204);
    return;
  }

  res.clearCookie("jwt", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  res.json({ message: "Cookie cleared." });
}