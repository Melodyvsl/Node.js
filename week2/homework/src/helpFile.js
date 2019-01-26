
const help = {
   help: " shows help section ",
   list: " Shows current to-dos ",
   add: " Adds item to-do item ",
   remove: " Removes item to-do item by its 1-base index",
   reset: " removes all to-do items from the list "
  };
   
const helpSection = function(){
console.log( `here are some usefull commands :  add: ${help.add}\nlist: ${help.list}`);
};

module.exports = helpSection;