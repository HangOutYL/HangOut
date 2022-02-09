import mongoose from "mongoose";

const users = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileImg: {
    type: String,
  },
  favorites: {
    type: Array,
  },
});

export default mongoose.model("Users", users);
