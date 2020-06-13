
exports.up = function (knex) {
  return knex.schema.createTable('rabbits', tbl => {
    tbl.increments()
    tbl.varchar('name', 126).notNullable()
    tbl.varchar('breed', 126).unique().notNullable()
  })

};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('rabbits')
};
