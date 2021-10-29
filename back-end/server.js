// Importing Modules
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const { sequelize } = require("./models");

app.use(express.static(path.resolve(__dirname, '../front-end/build')));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../front-end/build', 'index.html'));
});


// Import Route
const designRoute = require("./routers/design-route");
const marketingRoute = require("./routers/marketing-route");
const webRoute = require("./routers/webdev-route");

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Route Middleware
app.use("/miniclass", designRoute);
app.use("/miniclass", marketingRoute);
app.use("/miniclass", webRoute);

// DB Connection
app.listen({ port: 3001 }, async () => {
    console.log("Server up on http://localhost:3001\n");
    await sequelize.authenticate();
    console.log("\nDatabase Connected!");
});