import mongoose from "mongoose";
import { Request, Response } from "express";
import Users from "../models/userModel";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await Users.find({}).sort({createdAt: -1});
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: "Invalid user id."});
  }

  try {
    const user = await Users.findById(id);

    if (!user) {
      res.status(400).json({error: "Cannot find user."});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { email, username, biography } = req.body;
  const profilePicture = `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`;
  try {
    const user = await Users.create({ email, username, profilePicture, biography });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const addFriend = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { otherId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: "Invalid user id."});
  }

  if (!mongoose.Types.ObjectId.isValid(otherId)) {
    res.status(400).json({error: "Invalid other user id."});
  }

  try {
    const user = await Users.findById({_id: id});
    const otherUser = await Users.findById({_id: otherId});

    if (!user) {
      res.status(400).json({error: "Cannot find user."});
    } else if (!otherUser) {
      res.status(400).json({error: "Cannot find other user."});
    } else if (user.friends.includes(otherId)) {
      res.status(400).json({error: "Other user is already a friend."});
    } else {
      await user.friends.push(otherId);
      await user.save();
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: "Invalid user id."});
  }

  try {
    const user = await Users.findByIdAndDelete({_id: id});

    if (!user) {
      res.status(400).json({error: "Cannot find user."});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const removeFriend = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { otherId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: "Invalid user id."});
  }

  if (!mongoose.Types.ObjectId.isValid(otherId)) {
    res.status(400).json({error: "Invalid other user id."});
  }

  try {
    const user = await Users.findById({_id: id});
    const otherUser = await Users.findById({_id: otherId});

    if (!user) {
      res.status(400).json({error: "Cannot find user."});
    } else if (!otherUser) {
      res.status(400).json({error: "Cannot find other user."});
    } else if (!user.friends.includes(otherId)) {
      res.status(400).json({error: "Other user is not a friend."});
    } else {
      await user.friends.splice(user.friends.indexOf(otherId), 1);
      await user.save();
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({error: "Invalid user id."});
  }

  try {
    const profilePicture = req.file?.path;
    const user = await Users.findByIdAndUpdate({_id: id}, {
      ...req.body, profilePicture
    })

    if (!user) {
      res.status(400).json({error: "Cannot find user."});
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error});
  }
}