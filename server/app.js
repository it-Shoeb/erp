import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import express from "express";

import studentRouter from "./routes/student.route.js";

const app = express();

app.use(cookieParser());
import connectDB from "./config/database.js";
import cors from "cors";
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

app.use(express.json());

connectDB();
app.use("/student", studentRouter);

app.get("/server-status", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
