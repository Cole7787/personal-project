const app = require('../server.js');
const db = app.get('db');


module.exports = {
  show: (req, res)=>{
    db.get_cart_item([req.params.cartId], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  },

  create: (req, res, next)=>{

    //check if cart exists, if it does, continue to create item
    if (req.body.cartId) {
      next();
      return;
    }

    db.create_cart([1], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        req.body.cartId = result;
        next();
        return;
      }
    });
  },

  destroy: (req, res)=>{
    db.delete_product([req.params.cartId], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  }
};
