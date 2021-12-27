import getPlaceNameLongLat from "./getPlaceNameLatLong.mjs";
import getWeather from "./getWeather.mjs";
import weatherLogger from "./weatherLogger.mjs";
import temperatureConverter from "./temperatureConverter.mjs";
import chalk from "chalk";

export default async function main(location, tempUnit) {
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
    
${chalk.red("Weather was added to your weather tracking file, weather.txt")}
`
  );
}
