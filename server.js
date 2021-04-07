require("dotenv").config()
const express = require("express");
const path = require("path");
const cors = require("cors");
const songRoute = require("./routes/songRoute");

//DATABASE
const connectDB = require("./MongoDB");
connectDB();

//INITIALIZE APP
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//body-parser tokhoni use korbo jokhn error: toolarge entity error dekhabe tar mene limit drkr porbe jokhn_-->limit:30mb
app.use(cors());

//ROUTES
app.use("/songs", songRoute);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static(path.join(__dirname,'./client/build')));

  // users any type req,we will send our index.html from our build from client
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,'./client/build'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
