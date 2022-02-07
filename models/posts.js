import mongoose from "mongoose";

const posts = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  favorites: {
    type: Array,
  },
  userDetails: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    profileImg: {
      type: String,
    },
  },
});

export default mongoose.model("Posts", posts);
