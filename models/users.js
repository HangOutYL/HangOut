import mongoose from "mongoose";

const users = new mongoose.Schema({
  // id: {
  //   type: String,
  //   required: true,
  // },
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
});

export default mongoose.model("Users", users);
