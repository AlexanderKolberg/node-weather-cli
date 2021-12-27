import * as fs from "fs";

export default function weatherLogger(
  place,
  temperatureString,
  weatherDescription
) {
  let dateTime = new Date().toISOString();
  let entry = `${dateTime}: The weather in ${place} is currently ${weatherDescription} and ${temperatureString}\n`;
  fs.appendFile("weather.txt", entry, (error) => {
    if (error) {
      throw Error(error);
    }
  });
}
