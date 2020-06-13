const router = require('express').Router();

const Rabbits = require('../rabbits/rabbits-model');


router.post("/", (req, res) => {
  let rabbit = req.body;
  console.log(`rabbit in post/register`, rabbit)

  Rabbits.add(rabbit)
    .then(rabbit => {
      res.status(200).json(rabbit)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error adding rabbit to database.',
        error: err.toString()
      })
    })
});

router.delete("/", (req, res) => {
  let id = req.body;
  console.log(`rabbit in delete/register`, rabbit)

  Rabbits.remove(id)
    .then(rabbit => {
      res.status(200).json(rabbit)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error removing rabbit from database.',
        error: err.toString()
      })
    })
});






module.exports = router
