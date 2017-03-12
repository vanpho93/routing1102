const multer = require('multer'); //1

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './public');
    },
    filename(req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

function fileFilter(req, file, cb) {
    if (file.mimetype === 'image/png' 
        || file.mimetype === 'image/jpeg') {
        return cb(null, true);
    }
    cb(new Error('Sai dinh dang file'));
}

const uploadConfig = multer({
    storage, 
    limits: { fileSize: 1024 * 1024 },
    fileFilter
});

const uploadSingle = fieldname => uploadConfig.single(fieldname); //1111

const uploadArray = fieldname => uploadConfig.array(fieldname);

module.exports = { uploadSingle, uploadArray };
