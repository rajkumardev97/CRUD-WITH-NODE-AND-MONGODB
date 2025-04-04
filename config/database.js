const mongoose = require("mongoose");

module.exports = async function connectDatabase() {
  try {
    await mongoose.connect("mongodb://localhost:27017/CRUD", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
};
