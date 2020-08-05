import axios from "axios";

const foursquareApiRequest = async (coordinate1, coordinate2, category) => {
  const url = `https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_KEY}&v=20180323&limit=15&ll=${coordinate1},${coordinate2}&categoryId=${category}&radius=900`;
  const response = await axios.get(url);
  return response.data.response.venues;
};

export default foursquareApiRequest;


