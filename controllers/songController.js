const songSchemaModel = require("../models/songModel");
const mongoose = require("mongoose");

global.__basedir = __dirname;

const songFileUpload = async (req, res, next) => {
  try {
    const file = new songSchemaModel({
      //we can not put req.file.originalname coz we need to download full file name not just your file original name
      fileName: req.file.filename,
      filePath: req.file.path,
      fileType: req.file.mimetype,
      fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
    });
    await file.save();
    res.status(201).send(file);
  } catch (error) {
    res.status(400).send(error);
  }
};
const getallSongFiles = async (req, res, next) => {
  try {
    const files = await songSchemaModel.find();
    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error);
  }
};
const deleteSong = async (req, res) => {
  const { id } = req.params;

  //finding the url id and match with db specific id
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  //always put _id:id
  await songSchemaModel.findByIdAndRemove({ _id: id });

  res.json({ message: "Song deleted successfully." });
};

const downloadSong = async (req, res) => {
  const name = req.query.fileName;
  const path = req.query.filePath;
  // console.log(req.query)
  res.download(path,name)
};

const fileSizeFormatter = (bytes, decimal) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const dm = decimal || 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "YB", "ZB"];
  const index = Math.floor(Math.log(bytes) / Math.log(1000));
  return (
    parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + " " + sizes[index]
  );
};
module.exports = {
  songFileUpload,
  getallSongFiles,
  deleteSong,
  downloadSong,
};
