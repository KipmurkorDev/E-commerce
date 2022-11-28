const express =require('express')
const app= express()
require('dotenv').config()
const {welcomeMail} = require('./services/welcomEmail')
const cron = require('node-cron');

app.set('view engine', 'ejs');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 6000;

const welcomeMessage =()=>{
  cron.schedule('*/1 * * * *', async () => {
    await welcomeMail()
  });
  }

welcomeMessage()
app.listen(port, ()=>{
  console.log(`listening ${port}`);
})
