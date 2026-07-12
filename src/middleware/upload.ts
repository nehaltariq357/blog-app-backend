import multer from "multer"

const storage = multer.memoryStorage() 

export const upload = multer({storage}) // Use memory storage to store the uploaded files in memory instead of saving them to disk.