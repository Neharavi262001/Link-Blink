import File from "../models/FileModel.js";


//upload a file and get a file

export const uploadFile=async(req,res)=>{
    const fileDetails={
        filePath: req.file.path,
        fileName: req.file.originalname,
    }
    console.log(req.file)

    try {
        const file=await File.create(fileDetails)
        res.status(200).json({path:`http://localhost:${process.env.PORT}/file/${file._id}`})
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: error.message });
    }
}

export const getFile=async(req,res)=>{
    const {fileId}=req.params
    try {
        const file=await File.findById(fileId)
        await file.save()
        res.download(file.fileName,file.filePath,file.fileSize)
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
}
