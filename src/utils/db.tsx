import { data } from "autoprefixer";
import mongoose from "mongoose";
require("dotenv").config();

const connect = async () => {
  try {
    if (process.env.MONGO) {
      await mongoose.connect(process.env.MONGO);
    } else {
      throw new Error("No db uri defined in .env");
    }
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
