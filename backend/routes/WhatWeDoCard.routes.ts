//backend/routes/whatWeDoCard.routes.ts
//'''
import express from 'express';
import WhatWeDoCard from '../models/WhatWeDoCard.model';
import { verifyAdmin } from './admin.routes'; 

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const cards = await WhatWeDoCard.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cards', error });
  }
});

router.post('/', verifyAdmin, async (req, res) => {
  const { title, description, image } = req.body;
  if (!title || !description || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newCard = new WhatWeDoCard({ title, description, image });
    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(500).json({ message: 'Error creating card', error });
  }
});

router.delete('/:id', verifyAdmin, async (req, res) => {
  try {
    const card = await WhatWeDoCard.findByIdAndDelete(req.params.id);
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.status(200).json({ message: 'Card deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting card', error });
  }
});

export default router;
//'''