
  //Make directory of files
  var fs = require('fs');
  var path = require('path');
  

exports.trackHistory = function() {
  const dirTree = require('directory-tree');
  const tree = dirTree(path.join(__dirname, './output'),['.jpg', '.png']);
  fs.writeFile('./dist/assets/names.json', JSON.stringify(tree) , (error) => { /* handle error */ });
  console.log(' Done making directory tree!')
  return true;
  
}