import express from "express";
import "dotenv/config";
//dotenv.config();
import cors from "cors";
import http from "http";
import { connectDB } from "./lib/db.js";

// create express app

const app = express();
const server = http.createServer(app);

//middleware
app.use(express.json({ limit: "4mb" }));
app.use(cors());

app.use("/api/status", (req, res) => {
  res.send("sever is live");
});

const startServer = async () => {
  await connectDB();

  const PORT = process.env.PORT || 3000;
  server.listen(PORT, () => {
    console.log("Server running on PORT: " + PORT);
  });
};

startServer();
