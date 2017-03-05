let multer = require('multer'); //1

let storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './public');
    },
    filename: function (req, file, cb){
        cb(null, Date.now() + file.originalname);
    }
});

function fileFilter (req, file, cb) {
    if(file.mimetype === 'image/png' 
        || file.mimetype === 'image/jpeg'){
        return cb(null, true);
    }
    cb(new Error('Sai dinh dang file'));
}

let uploadConfig = multer({
    storage, 
    limits: {fileSize: 1024 * 1024},
    fileFilter
})

let uploadSingle = fieldname => uploadConfig.single(fieldname); //1111

let uploadArray = fieldname => uploadConfig.array(fieldname);

module.exports = {uploadSingle, uploadArray};