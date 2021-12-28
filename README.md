<br />
<div align="center">
<h3 align="center">Node Weather CLI</h3>
<br />
  <p align="center">
    Simple Weather CLI build with Node
    <br />
</div>

## About The Project

A simple weather CLI using OpenWeather and mapbox APIs using ECMAScript modules (ESM) in Node

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

### Prerequisites

1. [Node.js](https://nodejs.org) and [npm](https://npmjs.com) installed

### Installation

1. Get free API keys for [Mapbox](https://www.mapbox.com/) and [OpenWeather](https://openweathermap.org/)

2. Clone the repo
   ```sh
   git clone git@github.com:kolberg-dev/node-weather-cli.git
   cd node-weather-cli
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Make an dotenv file `.env` with the following content
   ```sh
   MAPBOX_API_KEY = yourMapboxApiKey
   OPENWEATHERMAP_API_KEY = yourOpenWeatherApiKey
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
<img width="716" alt="Screenshot of the help dialog" src="https://user-images.githubusercontent.com/74478295/147546335-d5c12ea0-36c5-4bc1-8992-210674c5f982.png">
Run the program with:
   ```sh
    node weather.js <Location>
   ```
<img width="716" alt="Screenshot of the location menu" src="https://user-images.githubusercontent.com/74478295/147546333-4de661df-89b4-43df-8e7b-4069461bddf2.png">
Choose the most accurat location in the menu
<img width="716" alt="Screenshot of result" src="https://user-images.githubusercontent.com/74478295/147546323-437f75cd-a6d0-4331-b387-6ce37d78403b.png">



<p align="right">(<a href="#top">back to top</a>)</p>
