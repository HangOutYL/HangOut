import mongoose from "mongoose";

const refreshTokens = new mongoose.Schema({
  refreshToken: {
    type: String,
  },
});

export default mongoose.model("RefreshTokens", refreshTokens);
