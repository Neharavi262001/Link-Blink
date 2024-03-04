import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName: String,
    filePath: String,
    fileSize: Number,
  },{timestamps:true});

export default mongoose.model('File',fileSchema)