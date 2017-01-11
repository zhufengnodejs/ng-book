let express = require('express');
let app = express();
app.get('/',function(req,res){
  res.sendFile('./app/index.html',{root:__dirname})
});
app.listen(8080);