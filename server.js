const express = require("express");
const dotenv = require("dotenv");
const https = require("https");
const connectDB = require("./util/db");
const NEPSE = require("./model/nepseModel");
const cors = require("cors");
const { Server } = require("socket.io");

dotenv.config();

connectDB();
const app = express();

const server = https.createServer(app);

app.use(cors());

const io = new Server(server);

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

io.on("connection", (socket) => {
  console.log("a user connected");

  io.emit("getData", async (req, res) => {
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
});

server.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
