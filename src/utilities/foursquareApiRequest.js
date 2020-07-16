import axios from "axios";
// https://api.foursquare.com/v2/venues/explore?ll=51.6065,0.1077

const foursquareApiRequest = async (coordinate1, coordinate2) => {
  console.log(coordinate1, coordinate2);
  const url = `https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_KEY}&v=20180323&limit=50&ll=${coordinate1},${coordinate2}`;
  const response = await axios.get(url);
  console.log(response.data.response.venues);
  return response.data.response.venues;
};

export default foursquareApiRequest;
