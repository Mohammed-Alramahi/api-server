require("dotenv").config();
const server = require("./src/server");
const PORT = process.env.PORT || 3300;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    server.start(PORT);
  })
  .catch((e) => {
    console.error("CONNECTION ERROR", e.message);
  });
