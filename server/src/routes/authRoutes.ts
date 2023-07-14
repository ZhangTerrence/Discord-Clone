import express from "express";
import * as authControllers from "../controllers/authControllers";

export const authRoutes = express.Router();

authRoutes.post("/signup", authControllers.signupUser);

authRoutes.post("/login", authControllers.loginUser);

authRoutes.post("/refresh", authControllers.refreshAccessToken);