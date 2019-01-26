const fs = require ('fs');

function addItem(){
  let newItem = process.argv[3];
  let content = fs.readFileSync('todo.txt', 'utf8',function(err,content){
    if (err) {
      return "ERROR"
    }else {
    let showList = JSON.parse(content);
    let add = showList.push(newItem);
    fs.writeFileSync ('todo.txt','utf8', function(){
       let stringify = JSON.stringify(showList);
       console.log ( "Item was added");
     });
    }
  });
 }
    

module.exports = addItem;