// models/Order.js
const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
  items: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Product'
      },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  shippingAddress: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0.0
  }
}, {
  timestamps: true
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order
