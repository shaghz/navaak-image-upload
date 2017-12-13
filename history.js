
  //Make directory of files
  var fs = require('fs');
  var path = require('path');
  const dirTree = require('directory-tree');
  const tree = dirTree(path.join(__dirname, './output'),['.jpg', '.png']);



exports.trackHistory = function() {
  
  fs.writeFile('./dist/assets/names.json', JSON.stringify(tree) , 'utf-8');
  console.log(' Done making directory tree!')
  return true;
  
}