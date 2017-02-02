const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const massive = require('massive');
const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/personal_project'
});


const app = module.exports = express();
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.set('db', db);


const product_control = require('./controllers/productCtrl.js');
const cart_control = require('./controllers/cartCtrl.js');
// const item_control = require('./controllers/cart_itemCtrl.js');


app.get('/api/product', product_control.index);
app.get('/api/cart/:userId', cart_control.show);
app.post('/api/cart', cart_control.create);
app.put('/api/cart/:productId', cart_control.update);
app.delete('/api/cart/:productId', cart_control.destroy);


app.get('*', (req,res) => {
  res.sendFile(`${__dirname}/app/index.html`);
});
app.listen(8080, ()=>{
  console.log('App is listening on port 8080');
});
