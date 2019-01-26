const fs = require ('fs');

function removeItem(){
  let requiredItem = process.argv[3];
  let content = fs.readFileSync('todo.txt', 'utf8',function(err,content){
    if (err) {
      return " ERROR"
    } else{
    let showList = JSON.parse(content);
    let remove = showList.splice(requiredItem,1)
    fs.writeFileSync('todo.txt','utf8', function(){
       let stringify = JSON.stringify(showList);
       console.log ( "Item was removed");
      
      });
    }  
  });



module.exports = removeItem;