import { Router } from 'express';
import Cake from '../models/Cake';

export default Router()
  .post('/', async (req, res, next) => {
    try {
      const cake = await Cake.insert(req.body);

      res.send(cake);
    } catch (err) {
      next(err);
    }
  });
