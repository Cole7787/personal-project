const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleAuth = require('passport-google-oauth');
const product_controll = require('./productCtrl.js');
const cart_controll = require('./cartCtrl.js');


const app = express();
app.use(bodyParser.json());

app.get('/api/product', product_controll.index);
app.get('/api/cart/:productId', cart_controll.show);
app.post('/api/cart', cart_controll.create);
app.put('/api/cart/:productId', cart_controll.update);
app.delete('/api/cart/:productId', cart_controll.destroy);



app.listen(8080, ()=>{
  console.log('App is listening on port 8080');
});
