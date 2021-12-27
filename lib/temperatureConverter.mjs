export default function temperatureConverter(kelvin, unit) {
  if (unit === "celsius") {
    return Math.round(kelvin - 273.15);
  }
  if (unit === "fahrenheit") {
    return Math.round(((kelvin - 273.15) * 9) / 5 + 32);
  }
}
