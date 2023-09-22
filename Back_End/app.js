const express = require("express");
const authRouter = require("./router/authRoute");
const dbConnect = require("./Config/DBconfig");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

dbConnect();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_URL] || [],
    credentials: true, //access-control-allow-credentials
  })
);

app.use("/api/auth", authRouter);

app.use('/', (req, res) => {
  res.status(200).json({
    data: "JWTAuth Server",
  });
});

module.exports = app;
