
exports.up = function(knex) {
  return knex.schema.table("observations", (table) => {
      table.string("air_temperature_unit")
      table.float("air_temperature")
  })
};

exports.down = function(knex) {
  return knex.schema.table("observations", (table) => {
      table.dropColumn("air_temperature_unit")
      table.dropColumn("air_temperature")
  })
};
