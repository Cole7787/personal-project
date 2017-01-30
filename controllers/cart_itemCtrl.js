const app = require('../server.js');
const db = app.get('db');

module.exports = {
  create: (req, res)=>{
    console.log(req.body);
    const { cartId, productId, quantity } = req.body;
    console.log();
    db.create_item([productId, quantity, cartId[0].id], (err)=>{
      if(err){
        console.log(err);
        res.reject(err);
        return;
      }
      else{
        db.get_cart_items([cartId[0].id], (err, result)=>{
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
