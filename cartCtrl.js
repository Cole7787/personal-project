const massive = require('massive');

const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/personal_project'
});

module.exports = {
  show: (req, res)=>{
    db.read_product([req.params.productId], (err, result)=>{
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  },

  create: (req, res)=>{

  },

  update: (req, res)=>{

  },

  destroy: (req, res)=>{
    db.delete_product([req.params.productId], (err, result)=>{
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  }
};
