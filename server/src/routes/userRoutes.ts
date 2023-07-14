import express from "express";
import parser from "../utilities/cloudinary";
import * as userControllers from "../controllers/userControllers";

export const userRoutes = express.Router();

userRoutes.get("/", userControllers.getUsers);

userRoutes.get("/:id", userControllers.getUser);

userRoutes.post("/friends/:id", userControllers.addFriend);

userRoutes.post("/guilds/:id", () => {console.log()})

userRoutes.post("/directMessages/:id", () => {console.log()})

userRoutes.delete("/:id", userControllers.deleteUser);

userRoutes.delete("/friends/:id", userControllers.removeFriend);

userRoutes.delete("/guilds/:id", () => {console.log()})

userRoutes.delete("/messages/:id", () => {console.log()})  

userRoutes.patch("/:id", parser.single("profilePicture"), userControllers.updateUser);