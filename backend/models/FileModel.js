import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileName: {
      type: String,
      required: true
  },
    filePath: {
      type: String,
      required: true
  },
    
  },{timestamps:true});

export default mongoose.model('File',fileSchema)