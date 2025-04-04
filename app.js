const express = require("express");
const blogRouter = require("./routes/BlogRoutes");

const app = express();

//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);

module.exports = app;
