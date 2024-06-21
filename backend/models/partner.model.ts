//backend/models/partner.model.ts
//'''
import mongoose, { Schema, Document } from 'mongoose';

interface IPartner extends Document {
  name: string;
  link: string;
  image: string;
}

const PartnerSchema: Schema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  image: { type: String, required: true },
});

const Partner = mongoose.model<IPartner>('Partner', PartnerSchema);

export default Partner;
//'''