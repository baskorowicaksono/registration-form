// Importing Modules
require("dotenv").config();
const express = require("express");
const app = express();
const { sequelize } = require("./models");

// Import Route
const designRoute = require("./routers/design-route");
const marketingRoute = require("./routers/marketing-route");
const webRoute = require("./routers/webdev-route");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Route Middleware
app.use("/miniclass", designRoute);
app.use("/miniclass", marketingRoute);
app.use("/miniclass", webRoute);

// DB Connection
app.listen({ port: 3000 }, async () => {
    console.log("Server up on http://localhost:3000\n");
    await sequelize.authenticate();
    console.log("\nDatabase Connected!");
});