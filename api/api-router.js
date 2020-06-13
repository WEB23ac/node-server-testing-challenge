const router = require('express').Router();

const rabbitsRouter = require('../rabbits/rabbits-router.js')


router.use('/rabbits', rabbitsRouter);


router.get('/', (req, res) => {
  res.status(200).json({ api: 'You are connected to the API.' })
});


module.exports = router;