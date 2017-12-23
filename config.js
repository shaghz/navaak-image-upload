module.exports = {
    dirname: __dirname,
    imagefolder: "/public/images/",
    orginalImagefolder: __dirname + '/public/images/orginal/',
    convertedImagefolder: __dirname + '/public/images/converted/',
    imageFileSize: 2097152 // 2mb
}

System.config({
    map: {
        'ngx-clipboard': 'node_modules/ngx-clipboard'
    }
});