// backend/models/WhatWeDoCard.model.ts
//'''
import { Schema, model } from 'mongoose';

interface IWhatWeDoCard {
  title: string;
  description: string;
  image: string;
}

const whatWeDoCardSchema = new Schema<IWhatWeDoCard>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true }
});

const WhatWeDoCard = model<IWhatWeDoCard>('WhatWeDoCard', whatWeDoCardSchema);

export default WhatWeDoCard;
//'''