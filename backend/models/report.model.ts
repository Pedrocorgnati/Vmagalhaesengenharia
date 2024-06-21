//'''
// backend/models/report.model.ts

import mongoose, { Document, Schema } from 'mongoose';

interface IReport extends Document {
  clienteEmail: string;
  categoria: string;
  dataRelatorio: Date;
  titulo: string;
  path: string;
}

const ReportSchema: Schema = new Schema({
  clienteEmail: { type: String, required: true },
  categoria: { type: String, enum: ['Concreto/graute', 'Argamassa', 'Bloco de concreto', 'Prisma oco', 'Prisma cheio', 'Prismático'], required: true },
  dataRelatorio: { type: Date, required: true },
  titulo: { type: String, required: true },
  path: { type: String, required: true },
});

export default mongoose.model<IReport>('Report', ReportSchema);
//'''