require('events').EventEmitter.prototype._maxListeners = 99;

var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs-extra');
var gm = require('gm');
var easyimg = require('easyimage');
var bodyParser = require('body-parser');
let im = require('imagemagick');
var slug = require('slug')
var exports = module.exports = {};
var mkdirp = require('mkdirp');
var glob = require('glob');
const dirTree = require('directory-tree');
const tree = dirTree(path.join(__dirname, './output'),['.jpg', '.png']);


  // making directory of files
var history = require('./history.js');
history.trackHistory();


var forceResize = function (name,dst,width,height){
   
    mkdirp('./output/'+name, function (err) {
      if (err) console.error(err)
      else console.log('pow!')
    });
    // fs.copy(name,path.join(__dirname, './output'+name), err => {
    //   if (err) return console.error(err)
    //   console.log('success!')
    // })
    gm('./uploads/'+ name)
    .resize(width, height)
    .noProfile()
    .write('./output/'+name+'/'+dst, function (err) {
      if (!err) console.log('resized to '+ width +'x'+height);
    });
    return (width,height);    

};



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'dist')));


app.get('*', function(req, res){
  return res.sendFile(path.join(__dirname, 'dist'));
});


app.post('/upload', function(req, res){
  // create an incoming form object
  var form = new formidable.IncomingForm();
  form.multiples = true;
  form.uploadDir = path.join(__dirname, '/uploads/');
  
  form.parse(req, function(err, fields, files) {
    var file = files.file;
    var uploadedImagePath = path.join(form.uploadDir, file.name); 

    uploadedImagePath = uploadedImagePath.toLocaleLowerCase();

    var uploadedImagePathArr = uploadedImagePath.split('.jpg');
    uploadedImagePath    = uploadedImagePathArr[0];
    uploadedImagePath += '.jpg';

    console.log('upload logic, step 1', uploadedImagePath);

    fs.rename(file.path, uploadedImagePath, function(err) {
      if(err) {
        console.log(err);
        return res.status(500).jsonp({ status: 'upload-failed', err: err });
      }

      // return res.status(500).jsonp({ status: 'upload-failed', err: 'yohooooooo' });

      console.log('upload logic, step 2')
      return res.jsonp({ status: 'upload-success', img: uploadedImagePath });
    });
  });
});




app.post('/sizes', function(req, res) {
  body = req.body

  var dimensions = body['dimensions'];
  var imgName    = body['imgName'];
  var imgname = imgName[0];
  imgname = imgname.toLocaleLowerCase();
  var imgnamearr = imgname.split('.jpg');
  imgname = imgnamearr[0];
  var imgNme= imgname;
  imgname += '.jpg';


 dimensions.map((size) => {
    forceResize(
      imgname,
      path.join(imgNme+'-'+size.width+ '.jpg'),
      size.width,
      size.height
    )
  })


  
  return res.jsonp({ status: 'convert-success' });
});


var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});