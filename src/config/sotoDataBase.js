const mongoose = require("mongoose");

const sotoDataBase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to DDBB");
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { sotoDataBase };