const app = require('../server.js');
const db = app.get('db');

module.exports = {
  create: (req, res)=>{
    console.log(req.body);
    const { cartId, productId, quantity } = req.body;
    db.create_item([productId, quantity, cartId], (err)=>{
      if(err){
        console.log(err);
      }
      else{
        db.get_cart_items([cartId], (err, result)=>{
          if(err){
            console.log(err);
          }
          else{
            console.log('hi');
            res.send(result);
          }
        });
      }
    });
  },

  update: (req, res)=>{
    db.update_cart_item([cartId, quantity], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  },

  destroy: (req, res)=>{
    db.delete_product([req.params.productId], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  }
}
