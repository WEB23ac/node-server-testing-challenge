const db = require('../data/db-config');

module.exports = {
  add,
  remove
}

function add(rabbit) {
  return db('rabbits')
    .insert(rabbit, 'id')
    .then(([id]) => {
      return db('rabbits')
        .where({ id })
        .first()
    })
}

function remove(id) {
  return db('rabbits')
    .where({ id })
    .del()
}