
//backend/models/file.model.ts'''
//'''
import mongoose, { Document, Schema } from 'mongoose';

interface IFile extends Document {
  filename: string;
  path: string;
  uploadedAt: Date;
}

const FileSchema: Schema = new Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IFile>('File', FileSchema);

//'''