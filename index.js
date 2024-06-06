const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const logger = require("morgan");
const Db_config = require("./DB.config.js/index");

dotenv.config();

const app = express();

// Connect to the database
Db_config().then(() => {
  console.log("Connected");
}).catch((error) => {
  console.error("Error connecting to the database:", error);
  process.exit(1); 
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

// Routes
app.get('/', (req, res) => {
  res.send("Server is running on AWS");
});
app.use(require("./routes/index.js"));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});
