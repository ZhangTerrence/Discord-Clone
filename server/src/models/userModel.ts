import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter an username."],
  },
  email: {
    type: String,
    required: [true, "Please enter an email."],
  },
  profilePicture: {
    type: String,
    default: ""
  },
  biography: {
    type: String,
    default: ""
  },
  friends: {
    type: [String],
    default: []
  },
  guilds: {
    type: [String],
    default: []
  },
  privateMessages: {
    type: [String],
    default: []
  }
}, { timestamps: true })

export = mongoose.model("Users", UserSchema);