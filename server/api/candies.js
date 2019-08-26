const router = require('express').Router();
const { Candy } = require('../db/index');

router.get('/', async (req, res, next) => {
  try {
    const allCandies = await Candy.findAll();
    res.json(allCandies);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
