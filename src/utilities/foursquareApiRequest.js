import axios from "axios";

const foursquareApiRequest = async (coordinate1, coordinate2, category) => {
  console.log('in Api request', category)
  const url = `https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_KEY}&v=20180323&limit=10&ll=${coordinate1},${coordinate2}&categoryId=${category}`;
  const response = await axios.get(url);
  console.log(response.data.response.venues)
  return response.data.response.venues;
};

export default foursquareApiRequest;

//categoryType

// &categoryId=${category}

//https://api.foursquare.com/v2/venues/search?client_id=Z4Y0MQUPNZER3F1JTJRZPODAUBIT22PTKCBARKHGYKFOIQDM&client_secret=JYTFTHP1YNZXQQESM1SEBPOY5ANU4P0EAWAAALFYCX4UVOSA&ll=40.7243,-74.0018&categoryId=4d4b7105d754a06374d81259&v=20180323


// Arts & Entertainment
// 4d4b7104d754a06370d81259


// Food
// 4d4b7105d754a06374d81259


// Nightlife Spot
// 4d4b7105d754a06376d81259

// College & University
// 4d4b7105d754a06372d81259


// Event
// 4d4b7105d754a06373d81259

// Outdoors & Recreation
// 4d4b7105d754a06377d81259


// Professional & Other Places
// 4d4b7105d754a06375d81259


// Shop & Service
// 4d4b7105d754a06378d81259

// Travel & Transport
// 4d4b7105d754a06379d81259