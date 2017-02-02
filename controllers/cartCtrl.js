const app = require('../server.js');
const db = app.get('db');


module.exports = {
  show: (req, res)=>{
    db.get_cart_items([req.params.userId], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send(result);
      }
    });
  },

  create: (req, res, next)=>{
    db.get_current_cart([req.body.productId], (err, products)=>{
      if(err){
        res.status(500).json(err);
      }
      else if(!products.length){
        var initial = 1
        db.create_item([req.body.userId,  req.body.productId, initial], (err, success)=>{
          if(err){
            console.log(err);
            res.status(500).json(err)
          }
          else {
            res.status(200).json('item created!')
          }
        })
      }
      else{
        console.log(req.body);
        db.add_quantity([req.body.productId], (err, success)=>{

          if(err){
            console.log(err);
            res.status(500).json(err)
          }
          else{
            res.status(200).json('already in cart added 1 to quantity')
          }
        })
      }
    })
  },

  update: (req, res)=>{

    db.update_quantity([req.params.productId, req.body.qty], (err, result)=>{
      if(err){
        console.log(err);
      }
      else{
        res.send('updated');
      }
    })
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
};
