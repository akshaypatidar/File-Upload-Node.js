var express = require('express');
var router = express.Router();

// File Uploading
var multer = require('multer');

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
         callback(null, "./public/images/");
    },
    filename: function(req, file, callback) {
        callback(null,file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).array("imgUploader", 10); //Field name and max count

router.post("/", function(req, res) {
     upload(req, res, function(err) {

         if (err) {
             return res.json({
				status: false,
				message: 'File Upload Failed'
			});
         }
         else{
         	return res.json({
				status: true,
				message: 'File Uploaded Successfully'
			});
         }

         

     });

 });



module.exports = router;
