// backend/controllers/whatWeDoCard.controller.ts
import { Request, Response } from 'express';
import WhatWeDoCard, { IWhatWeDoCard } from '../models/whatWeDoCard.model';

export const getCards = async (req: Request, res: Response): Promise<void> => {
  try {
    const cards: IWhatWeDoCard[] = await WhatWeDoCard.find();
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cards' });
  }
};

export const addCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, image } = req.body;
    const newCard = new WhatWeDoCard({ title, description, image });
    const savedCard = await newCard.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar card' });
  }
};

export const deleteCard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await WhatWeDoCard.findByIdAndDelete(id);
    res.status(200).json({ message: 'Card deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar card' });
  }
};
