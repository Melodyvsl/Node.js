const fs = require('fs');

const showList = function(){
  fs.readFile('todo.txt', 'utf8', function (err, showList){
    if (err) throw err;
    console.log(showList);
  });
};

module.exports = showList;