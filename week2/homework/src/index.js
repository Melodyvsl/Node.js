const fs = require('fs');
const helpFile = require('./helpFile');
const listFile = require('./listFile');
const addFile = require('./addFile');
const removeFile = require('./removeFile');
const resetFile = require('.resetFile');




switch (process.argv[2]) {
    case 'add':
        addFile.addItem();
    break;

    case 'help':
        helpFile.helpSection();
    break;

    case 'list':
        listFile.showList();
    break;

    case 'remove':      
         removeFile.removeItem();
    break;

    case 'reset':
        resetFile.removeItem();
    break;

    default :
         helpFile.showHelp();
}