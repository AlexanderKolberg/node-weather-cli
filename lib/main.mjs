import getPlaceNameLongLat from "./getPlaceNameLatLong.mjs";
import getWeather from "./getWeather.mjs";
import weatherLogger from "./weatherLogger.mjs";
import temperatureConverter from "./temperatureConverter.mjs";
import chalk from "chalk";
import setEnv from "./setEnv.mjs";

export default async function main(location, tempUnit) {
  setEnv();
  const [placeName, long, lat] = await getPlaceNameLongLat(location);
  const [currentTemp, currentWeatherDesc, dailyWeatherDesc] = await getWeather(
    lat,
    long
  );
  const tempString =
    temperatureConverter(currentTemp, tempUnit) +
    (tempUnit === "celsius" ? "C" : "F");
  weatherLogger(placeName, tempString, currentWeatherDesc);
  console.clear();
  console.log(
    `Current temperature in ${chalk.blue(placeName)} is ${chalk.blue(
      tempString
    )}.
Conditions are currently: ${chalk.green(currentWeatherDesc)}.
What you should expect: ${chalk.green(dailyWeatherDesc)}.
    
${chalk.yellow("Weather was added to your weather tracking file, weather.txt")}
`
  );
}
