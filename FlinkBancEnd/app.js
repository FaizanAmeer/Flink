const express = require("express");
const env = require("dotenv").config();
const port = 5000;
const app = express();
const connect = require("./Config/db");
const userRoutes = require("./Routes/userRouts");
const errorHandler = require("./MiddleWare/errorHandler");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.listen(port, () => console.log(`express running on ${port}`));

app.use("/", userRoutes);
app.use(errorHandler);
