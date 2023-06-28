import express from "express";
import { getUsers, getUser, createUser, addFriend, deleteUser, removeFriend, updateUser } from "../controllers/userControllers";

export const userRouter = express.Router();

// GET all users
userRouter.get("/", getUsers)

// GET a single user
userRouter.get("/:id", getUser)

// POST a new user
userRouter.post("/", createUser)

// POST a new friend for an user
userRouter.post("/friends/:id", addFriend)

// POST a new guild for an user
userRouter.post("/guilds/:id", () => {console.log()})

// POST a new direct message
userRouter.post("/directMessages/:id", () => {console.log()})

// DELETE an user
userRouter.delete("/:id", deleteUser)

// DELETE a friend for an user
userRouter.delete("/friends/:id", removeFriend)

// DELETE a guild
userRouter.delete("/guilds/:id", () => {console.log()})

// DELETE a direct message
userRouter.delete("/messages/:id", () => {console.log()})  

// UPDATE an user 
userRouter.patch("/:id", updateUser)
