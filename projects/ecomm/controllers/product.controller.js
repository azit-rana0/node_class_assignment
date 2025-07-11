const listProduct = async (req, res) => {
  res.json({
    success: true,
    message: "Dummy product list api",
  });
};

const productController = {
  listProduct,
};

module.exports = productController;
