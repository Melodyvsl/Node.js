const fs = require ('fs');

let resetItem = function(){
  let requiredItem = process.argv[3];
  let content = fs.readFileSync('todo.txt', 'utf8',function(err,content){
    if (err) {
      return " ERROR"
    }else {
    let showList = JSON.parse(content);
    }
  });
};

  resetItem.length = 0;
  fs.writeFileSync ('todo.txt','utf8', function() {
     console.log ( "file was reset");
  });
  
  module.exports = removeItem;