const app = require('../server.js');
const db = app.get('db');

module.exports = {
  create: (req, res)=>{
    console.log(req.body);
    const { userId, productId, quantity } = req.body;
    console.log();
    db.create_item([productId, quantity, userId], (err)=>{
      if(err){
        console.log(err);
        res.reject(err);
        return;
      }
      else{
        db.get_cart_items([userId], (err, result)=>{
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
    db.update_cart_item([req.body], (err, result)=>{
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
