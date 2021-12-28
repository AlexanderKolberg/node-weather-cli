import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import main from "./lib/main.mjs";

yargs(hideBin(process.argv))
  .option("celsius", {
    alias: "c",
    describe: "Display and log temperature in celsius (default)",
    type: "boolean",
    //default: true, //cant make a default value mutually exclusive
    conflicts: "fahrenheit",
  })
  .option("fahrenheit", {
    alias: "f",
    describe: "Display and log temperature in fahrenheit",
    type: "boolean",
  })
  .command(
    "$0",
    "Place name",
    () => {},
    (argv) => {
      if (argv._.length == 0)
        return console.log("You need to provide a location to get the weather");
      const placeName = argv._[0];
      let tempUnit = "celsius";
      if (argv.fahrenheit) tempUnit = "fahrenheit";
      main(placeName, tempUnit);
    }
  )
  .usage(`Usage "node weather.js <someLocation> [other options]"`)
  .example(
    `"node weather.js prague -f" Gets the weather in Prague in Fahrenheit`
  )
  .help().argv;
