require("dotenv").config();
const mongoose = require("mongoose");

const mongoose_url = process.env.MONGO_CONN;

mongoose
  .connect(mongoose_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  })
  .catch((err) => {
    console.log("MongoDB Connected Error: ", err);
  });
