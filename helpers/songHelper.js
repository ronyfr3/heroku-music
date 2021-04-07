const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    //we place data before file name because one user can update same file name,we can differentiate the file name with this date/time before the file name
    cb(
      null,
      //we need every second coz it differntiate differnet song
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

const filefilter = (req, file, cb) => {
  if (file.mimetype === "audio/mp3" || file.mimetype === "audio/mpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: filefilter });

module.exports = { upload };
