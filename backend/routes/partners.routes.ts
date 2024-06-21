//backend/routes/partners.routes.ts
//'''
import express, { Request, Response, NextFunction } from 'express';
import Partner from '../models/partner.model';
import jwt from 'jsonwebtoken';

const router = express.Router();

interface AuthenticatedRequest extends Request {
  user?: string | jwt.JwtPayload;
}

const verifyUser = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET!);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

router.get('/', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const partners = await Partner.find();
    res.json(partners);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  const { name, link, image } = req.body;

  const partner = new Partner({
    name,
    link,
    image,
  });

  try {
    await partner.save();
    res.status(201).send(partner);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/:id', verifyUser, async (req: AuthenticatedRequest, res: Response) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).send('Partner not found');

    await partner.remove();
    res.status(200).send('Partner deleted');
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
//'''