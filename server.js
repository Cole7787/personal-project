const express = require('express');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const massive = require('massive');
const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/personal_project'
});

// passport.use(new GoogleStrategy({
//   clientId: config.clientId,
//   clientSecret: config.clientSecret,
//   callbackUrl: config.callbackUrl
// }, (accessToken, refreshToken, profile, done)=>{
//
// }))



const app = module.exports = express();
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());
app.set('db', db);

const product_control = require('./controllers/productCtrl.js');
const cart_control = require('./controllers/cartCtrl.js');
const item_control = require('./controllers/cart_itemCtrl.js');



// app.use(session({
//   secret: config.secret,
//   resave: true,
//   saveUninitialized: false
// }));
// app.use(passport.initialized());
// app.use(passport.session());


app.get('/api/product', product_control.index);
app.get('/api/cart/:productId', cart_control.show);
app.post('/api/cart', cart_control.create, item_control.create);
app.put('/api/cart/:productId', item_control.update);
app.delete('/api/cart/:productId', item_control.destroy);



app.listen(8080, ()=>{
  console.log('App is listening on port 8080');
});
