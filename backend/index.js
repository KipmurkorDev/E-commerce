const express = require("express");
require("dotenv").config();
const {router} =require('./routers/router')
const app = express();
app.use(express.json());

app.use('Products/', router)


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(` Server is running ${port}`);
});
