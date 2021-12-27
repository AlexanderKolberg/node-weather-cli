import fetch from "node-fetch";
import inquirer from "inquirer";

export default async function getPlaceNameLongLat(searchName) {
  try {
    const mapBoxApiKey = process.env.MAPBOX_API_KEY;
    const mapBoxEndpoint = `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchName}.json?access_token=${mapBoxApiKey}`;
    const response = await fetch(mapBoxEndpoint);
    const responseJson = await response.json();
    let placeNamesCenter = responseJson.features.map((e) => {
      return { name: e.place_name, value: [e.place_name, e.center] };
    });
    const res = await inquirer.prompt([
      {
        type: "list",
        name: "Location",
        message: "",
        choices: placeNamesCenter,
      },
    ]);
    return [res.Location[0], ...res.Location[1]];
  } catch (error) {
    throw new Error(error);
  }
}
