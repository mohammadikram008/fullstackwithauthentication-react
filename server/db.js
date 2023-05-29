const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
db = process.env.DATABASE;
module.exports = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      // useCreateIndex: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(
      db,
      // "mongodb+srv://mohammadikram20001:Pakstar@123@cluster0.x2tyve9.mongodb.net/data",

      connectionParams
    );
    console.log("Connected to database");
  } catch (error) {
    console.log("Could not connect to database.", error);
  }
};
