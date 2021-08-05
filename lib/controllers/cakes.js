const { Router } = require('express');
const Cake = require('../models/Cake.js');
const CakeService = require('../services/CakeService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const cake = await Cake.insert(req.body);

      res.send(cake);
    } catch (err) {
      next(err);
    }
  });

