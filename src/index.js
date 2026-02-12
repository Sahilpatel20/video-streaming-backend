// 🔥 LOAD ENV VARIABLES FIRST (ABSOLUTE SAFE WAY)
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

// ✅ Now import everything else
import connectDB from "./db/db.js";
import { app } from "./app.js";

// ✅ Connect Database then start server
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
      console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);
      console.log("API Key:", process.env.CLOUDINARY_API_KEY ? "Loaded ✅" : "Missing ❌");
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed !!! ", err);
  });








