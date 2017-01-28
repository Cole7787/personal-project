const app = require('../server.js');
const db = app.get('db');

module.exports = {
  index: (req, res)=>{
    db.read_products((err, result)=>{
      if(err){
        console.log("Error");
      }
      else{
        res.send(result);
      }
    });
  }
};
