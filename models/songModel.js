const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const songSchemaModel = mongoose.model("songSchema", songSchema);

module.exports = songSchemaModel;