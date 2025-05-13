// controllers/orderController.js
const Order = require('../models/Order')

// @desc    Create new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
  const { items, shippingAddress, totalPrice } = req.body

  if (items && items.length === 0) {
    res.status(400).json({ message: 'No order items' })
    return
  }

  try {
    const order = new Order({
      items,
      shippingAddress,
      totalPrice
    })

    const createdOrder = await order.save()
    res.status(201).json(createdOrder)
  } catch (error) {
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = {
  createOrder
}
