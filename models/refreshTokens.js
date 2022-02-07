import mongoose from "mongoose";

const refreshTokens = new mongoose.Schema({
  refreshToken: {
    type: Array,
  },
});

export default mongoose.model("RefreshTokens", refreshTokens);
