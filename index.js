const express = require("express");
const app = express();
require("dotenv").config();
const installmentUserRister = require("./routes/installmentUserRister");

const httpStatus = require("./utils/httpStatus");

app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const URL = process.env.ROUTES_URL;
app.use(`${URL}/installment-user-register/`, installmentUserRister);

app.use(express.static("."));
// global error handler
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
  console.log(`app running at ${PORT}`);
});