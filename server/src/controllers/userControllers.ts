import { Request, Response } from "express";
import mongoose from "mongoose";
import User from "../models/userModel";
import expressAsyncHandler from "express-async-handler";

// GET /api/users/ - Gets all users
export const getUsers = expressAsyncHandler(async (req: Request, res: Response) => {
  const users = await User.find({}).sort({createdAt: -1});
  res.status(200).json(users);
})

// GET /api/users/:id - Get an user
export const getUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid user id." });
    return;
  }

  const user = await User.findById({ _id: id });

  if (!user) {
    res.status(400).json({ error: "No user found." });
    return;
  }

  res.status(200).json(user);
})

// POST /api/friends/:id - Adds a friend
export const addFriend = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id_self } = req.params;
  const { id_other } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id_self)) {
    res.status(400).json({ error: "Invalid user id (params)." });
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(id_other)) {
    res.status(400).json({ error: "Invalid user id (body)." });
    return;
  }

  const self = await User.findById({ _id: id_self });
  const other = await User.findById({ _id: id_other });

  if (!self) {
    res.status(400).json({ error: "Cannot find user (params)." });
    return;
  } 
  if (!other) {
    res.status(400).json({ error: "Cannot find user (body)." });
    return;
  }  
  if (self.friends.includes(id_other)) {
    res.status(400).json({ error: "User is already a friend." });
    return;
  } 

  await self.friends.push(id_other);
  await self.save();
  res.status(200).json(self);
})

// DELETE /api/users/:id - Removes an user
export const deleteUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid user id." });
    return;
  }

  const user = await User.findByIdAndDelete({ _id: id });

  if (!user) {
    res.status(400).json({ error: "Cannot find user." });
    return;
  }

  res.status(200).json(user);
})

// DELETE /api/friends/:id - Removes a friend
export const removeFriend = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id_self } = req.params;
  const { id_other } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id_self)) {
    res.status(400).json({ error: "Invalid user id (params)." });
    return;
  }
  if (!mongoose.Types.ObjectId.isValid(id_other)) {
    res.status(400).json({ error: "Invalid user id (body)." });
    return;
  }

  const self = await User.findById({ _id: id_self });
  const other = await User.findById({ _id: id_other });

  if (!self) {
    res.status(400).json({ error: "Cannot find user (params)." });
    return;
  } 
  if (!other) {
    res.status(400).json({ error: "Cannot find user (body)." });
    return;
  }  
  if (!self.friends.includes(id_other)) {
    res.status(400).json({ error: "User is not a friend." });
    return;
  } 

  await self.friends.splice(self.friends.indexOf(id_other), 1);
  await self.save();
  res.status(200).json(self);
})

// PATCH /api/friends/:id - Updates an user
export const updateUser = expressAsyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({ error: "Invalid user id." });
    return;
  }

  const profilePicture = req.file?.path;
  const user = await User.findByIdAndUpdate({ _id: id }, {
    ...req.body, profilePicture
  })

  if (!user) {
    res.status(400).json({ error: "Cannot find user." });
    return;
  }

  res.status(200).json(user);
})