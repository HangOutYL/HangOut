import mongoose from "mongoose";

const Tokens = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: true,
  },
});

export default mongoose.model("tokens", Tokens);
