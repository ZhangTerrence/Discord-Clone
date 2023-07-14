import type { Request, Response, NextFunction } from "express";
import type { DecodedTokenInterface } from "../utilities/createTokens";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import env from "../utilities/validateEnv";

interface VerifyRequestInterface extends Request {
  _id: mongoose.Types.ObjectId;
}

export type JwtVerifyErrorType = jwt.VerifyErrors | null;

export type JwtVerifyDecodedType = string | jwt.JwtPayload | undefined;

export const verifyJwt = (req: VerifyRequestInterface, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" })
    return;
  }

  const token = authHeader?.split(" ")[1];

  jwt.verify(
    token, 
    env.ACCESS_TOKEN_SECRET, 
    (err: JwtVerifyErrorType, decoded: JwtVerifyDecodedType) => {
      if (err) {
        res.status(403).json({ error: "Forbidden" });
        return;
      }

      req._id = (decoded as DecodedTokenInterface)._id;
      next();
    }
  )
}