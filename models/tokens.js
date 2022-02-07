import mongoose from "mongoose";

const Tokens = new mongoose.Schema({
  refreshToken: {
    type: String,
  },
});

export default mongoose.model("tokens", Tokens);
