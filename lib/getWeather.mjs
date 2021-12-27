import fetch from "node-fetch";

export default async function getWeather(lat, lon) {
  try {
    const openweathermapAPI = process.env.OPENWEATHERMAP_API_KEY;
    const openweathermap = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${openweathermapAPI}`;
    const response = await fetch(openweathermap);
    const json = await response.json();
    const currentTemperature = json.current.temp;
    const currentWeatherDescription = json.current.weather[0].description;
    const dailyWeatherDescription = json.daily[0].weather[0].description;
    return [
      currentTemperature,
      currentWeatherDescription,
      dailyWeatherDescription,
    ];
  } catch (error) {
    throw new Error(error);
  }
}
