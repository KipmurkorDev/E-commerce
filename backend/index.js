const express = require("express");
require("dotenv").config();
const cors = require('cors')

const {router} =require('./routers/productsrouter')
const {userRouter}=require('./routers/userRuoter')
const {cartRouter}= require('./routers/cartRouter')
const app = express();
app.use(express.json());



app.use(cors())
app.use('/Products', router)
app.use('/users', userRouter)
app.use('/cart', cartRouter)


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(` Server is running ${port}`);
});
