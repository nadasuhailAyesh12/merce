const path = require("path");

const express = require("express");
const upload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewars/ErrorsMiddleware");
const router = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(upload());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use("/api/v1", router);
app.use(errorHandler);

module.exports = app;
