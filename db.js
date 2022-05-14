const mongoose = require("mongoose");

module.exports = {
  async connect() {
    try {
      await mongoose.connect(process.env.MONGOOSE);
    } catch (err) {
      console.log("Error " + err);
    }
  },
};
