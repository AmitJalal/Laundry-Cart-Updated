const mongoose = require("mongoose");

let allRegisteredUsers = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Phone: { type: Number, required: true },
    District: { type: String, required: true },
    State: { type: String, required: true },
    Adress: { type: [String], required: true },
    Pincode: { type: Number, required: true },
    Password: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", allRegisteredUsers);
