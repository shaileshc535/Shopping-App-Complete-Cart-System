const mongoose = require("mongoose");
require("colors");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected ${conn.connection.host}`.inverse.yellow);
  } catch (error) {
    console.error(`Error: ${error.message}`.inverse.red);
    process.exit(1);
  }
};

module.exports = connectDB;
