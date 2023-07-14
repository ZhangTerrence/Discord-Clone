import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

interface IUser {
  _id: mongoose.Types.ObjectId,
  username: string,
  email: string,
  hashedPassword: string,
  profilePicture: string,
  biography: string,
  friends: string[],
  guilds: string[],
  privateMessages: string[],
}

interface UserModel extends mongoose.Model<IUser> {
  signup(_id: mongoose.Types.ObjectId, username: string, email: string, password: string): IUser,
  login(email: string, password: string): IUser
}

const UserSchema = new mongoose.Schema<IUser, UserModel>({
  _id: mongoose.Types.ObjectId,
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  hashedPassword: {
    type: String,
    required: true
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

UserSchema.static("signup", async function signup(_id: mongoose.Types.ObjectId, username: string, email: string, password: string) {
  if (!(username && email && password)) {
    throw Error("All fields must be filled.");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is too weak.");
  }

  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw Error("Email is already in use.") 
  }

  const usernameExists = await this.findOne({ username });

  if (usernameExists) {
    throw Error("Username is already in use.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const profilePicture = `https://cdn.discordapp.com/embed/avatars/${Math.floor(Math.random() * 4)}.png`;
  const user = await this.create({ _id, username, email, hashedPassword, profilePicture });
  
  return user;
})

UserSchema.static("login", async function login(email: string, password: string) {
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid.");
  }

  if (!(email && password)) {
    throw Error("All fields must be filled.");
  }

  const user: IUser | null = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect email."); 
  }

  const match = await bcrypt.compare(password, user.hashedPassword);

  if (!match) {
    throw Error("Incorrect password.");
  }

  return user;
})

export = mongoose.model<IUser, UserModel>("User", UserSchema);