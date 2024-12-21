// successfull react serve working code for react
const path = require("path");
const express = require("express");
const app = express(); // create express app

console.log('before hitt')
//home route will redirect to the citizen-pannel route
app.get("/", (req, res) => {
  console.log('home route hitted')
  res.redirect('/citizen')
});

//middleware to server static files also
app.use(express.static("citizen_build"));
app.use(express.static("property_build"));
app.use(express.static("water_build"));
app.use(express.static("trade_build"));
app.use(express.static("dashboard_build"));
app.use(express.static("advertisement_build"));
app.use(express.static("citizen_mb_build"));
app.use(express.static("tanker_admin_build"));
app.use(express.static("grievance_build"));
app.use(express.static("fines_build"));
app.use(express.static("amc_tc_build"));
app.use(express.static("rmsDashboard_build"));
app.use(express.static("market_app_build"));
app.use(express.static("userControl_build"));
app.use(express.static("advertisement-module_build"));
app.use(express.static("heatmap_build"));

//actual routes
app.get("/citizen", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});
app.get("/citizen/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_build", "index.html"));
});

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/dashboard/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard_build", "index.html"));
});
app.get("/property", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/property/*", (req, res) => {
  res.sendFile(path.join(__dirname, "property_build", "index.html"));
});
app.get("/water", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/water/*", (req, res) => {
  res.sendFile(path.join(__dirname, "water_build", "index.html"));
});
app.get("/trade", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/trade/*", (req, res) => {
  res.sendFile(path.join(__dirname, "trade_build", "index.html"));
});
app.get("/advertisement", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/advertisement/*", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement_build", "index.html"));
});
app.get("/mobile", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});
app.get("/mobile/*", (req, res) => {
  res.sendFile(path.join(__dirname, "citizen_mb_build", "index.html"));
});

app.get("/agency", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/agency/*", (req, res) => {
  res.sendFile(path.join(__dirname, "tanker_admin_build", "index.html"));
});
app.get("/grievance", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/grievance/*", (req, res) => {
  res.sendFile(path.join(__dirname, "grievance_build", "index.html"));
});
app.get("/fines", (req, res) => {
  res.sendFile(path.join(__dirname, "fines_build", "index.html"));
});
app.get("/fines/*", (req, res) => {
  res.sendFile(path.join(__dirname, "fines_build", "index.html"));
});
app.get("/amc-app", (req, res) => {
  res.sendFile(path.join(__dirname, "amc_tc_build", "index.html"));
});
app.get("/amc-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "amc_tc_build", "index.html"));
});
app.get("/daily-license-app", (req, res) => {
  res.sendFile(path.join(__dirname, "market_app_build", "index.html"));
});
app.get("/daily-license-app/*", (req, res) => {
  res.sendFile(path.join(__dirname, "market_app_build", "index.html"));
});
app.get("/userControl", (req, res) => {
  res.sendFile(path.join(__dirname, "userControl_build", "index.html"));
});
app.get("/userControl/*", (req, res) => {
  res.sendFile(path.join(__dirname, "userControl_build", "index.html"));
});
app.get("/advertisement-module", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement-module_build", "index.html"));
});
app.get("/advertisement-module/*", (req, res) => {
  res.sendFile(path.join(__dirname, "advertisement-module_build", "index.html"));
});
app.get("/heatmap", (req, res) => {
  res.sendFile(path.join(__dirname, "heatmap_build", "index.html"));
});
app.get("/heatmap/*", (req, res) => {
  res.sendFile(path.join(__dirname, "heatmap_build", "index.html"));
});
// start express server on port 80
app.listen(500, () => {
  console.log("server starting on port 500");
});
