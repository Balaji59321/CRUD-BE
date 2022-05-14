const productmodel = require("./../model/products");

module.exports.findProduct = async (req, res, next) => {
  try {
    const resp = await productmodel.find();
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

module.exports.createProduct = async (req, res, next) => {
  const productData = new productmodel({ ...req.body });
  try {
    const resp = await productData.save();
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

module.exports.updateProduct = async (req, res, next) => {
  //   const productData = new productmodel({ ...req.body });
  try {
    const resp = await productmodel.updateOne(
      { _id: req.params.id },
      {
        ...req.body,
      },
      { runValidators: true }
    );
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};

module.exports.deleteProduct = async (req, res, next) => {
  try {
    const resp = await productmodel.findOneAndDelete(req.params.id);
    res.send(resp);
  } catch (err) {
    res.send(err);
  }
};
