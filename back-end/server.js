// Importing Modules
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");

// Import Route
const designRoute = require("./routers/design-route");
const marketingRoute = require("./routers/marketing-route");
const webRoute = require("./routers/webdev-route");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Route Middleware
app.use("/api/miniclass", designRoute);
app.use("/api/miniclass", marketingRoute);
app.use("/api/miniclass", webRoute);

// DB Connection
app.listen({ port: 8080 }, async () => {
    console.log("Server up on http://localhost:8080\n");
    await sequelize.authenticate();
    console.log("\nDatabase Connected!");
});