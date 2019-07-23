const products = require("../products.json");

const getProduct = (req, res) => {
  const num = req.params;
  if (!products[num.id - 1]) {
    res.status(500).send("Item not in list");
  } else {
    res.json(products[num.id - 1]);
  }
};

module.exports = { getProduct };
