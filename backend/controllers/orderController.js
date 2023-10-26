const createOrder = (req, res) => {
  console.log(`order request: ${JSON.stringify(req.body)}`);
  res.status(201).json({ message: "Order created" });
};

module.exports = { createOrder };
