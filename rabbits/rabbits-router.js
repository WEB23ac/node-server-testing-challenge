const router = require('express').Router();

const Rabbits = require('../rabbits/rabbits-model');


router.post("/", (req, res) => {
  let rabbit = req.body;
  console.log(`rabbit in post/register`, rabbit)

  // Rabbits.add(rabbit)
  //   .then(saved => {
  //     res.status(201).json(saved);
  //   })
  //   .catch(error => {
  //     res.status(500).json(error);
  //   });

});






module.exports = router;

