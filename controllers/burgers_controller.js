const express = require('express');
const burger = require('../model/burger');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const burgers = await burger.selectAll();
    res.render('index', { burgers });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/api/burgers', async (req, res) => {
  try {
    const burgers = await burger.selectAll();
    res.json(burgers);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/api/burgers', async (req, res) => {
  try {
    const { name } = req.body;
    const newBurger = await burger.insertBurger(name);
    res.json(newBurger);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/api/burgers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { devoured } = req.body;
    const updateBurger = await burger.updateBurger(id, devoured);
    res.json(updateBurger);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
