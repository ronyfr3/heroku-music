const express = require("express");
const { upload } = require("../helpers/songHelper");
const {
  songFileUpload,
  getallSongFiles,
  deleteSong,
  downloadSong
} = require("../controllers/songController");
//we can not name routers start with get/delete/post etc name it short & nice
const router = express.Router();
router.post("/singleFile", upload.single("file"), songFileUpload);
router.get("/getallSongFiles", getallSongFiles);
router.delete("/deleteSong/:id", deleteSong);
router.get("/downloadSong/", downloadSong);

module.exports = router;
