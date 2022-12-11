const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    totalQuantity: Number,
    totalPrice: Number,
    location: String,
    Address: String,
    Shirts: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
    Tshirts: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
    Trousers: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
    Jeans: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
    Boxers: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
    Joggers: {
      name: String,
      washtype: String,
      quantity: Number,
      totalPrice: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("orders", ordersSchema);
