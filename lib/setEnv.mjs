import dotenv from "dotenv";
export default function setEnv() {
  dotenv.config();
  checkIfSet("OPENWEATHERMAP_API_KEY");
  checkIfSet("MAPBOX_API_KEY");
}

function checkIfSet(variable) {
  if (process.env[variable] == undefined) {
    throw new Error(`The ${variable} is not set`);
  }
}
