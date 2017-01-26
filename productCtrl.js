const massive = require('massive');

const db = massive.connectSync({
  connectionString: 'postgres://postgres:@localhost/personal_project'
})

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
