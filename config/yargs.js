const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: 'Es la base'
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    demandOption: true,
    default: false,
    describe: 'muestra la tabla en consola'
  })
  .option("h", {
    alias: "hasta",
    type: "number",
    default: false,
    describe: 'hasta que se multiplica'
  })

  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;

  module.exports = argv;