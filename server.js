const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./util/db");
const NEPSE = require("./model/nepseModel");
const cors = require("cors");

dotenv.config();

connectDB();
const app = express();

app.use(cors());

app.get("/api/nepse-live", async (req, res) => {
  try {
    const liveData = await NEPSE.find();
    if (!liveData) {
      res.sendStatus(400).json({
        message: "No data found",
      });
    }

    res.status(200).json({
      data: liveData,
    });
  } catch (err) {
    res.json({ error: err });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
