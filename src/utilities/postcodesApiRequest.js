import axios from "axios";

//postcodes.io api request that takes input postcodes and returns
//finalOutput object with { validPostcodes[{postcode, logitude, latitude}], 
//notValidPostcodes[postcodes] }
const postCodeApiRequest = async (postcodeOne, postcodeTwo) => {
  const baseUrl = "https://api.postcodes.io";
  const finalOutput = { validPostcodes: [], notValidPostcodes: [] };
  try {
    const APIresponse = await axios.post(`${baseUrl}/postcodes`, {
      "postcodes": [postcodeOne, postcodeTwo],
    });

    APIresponse.data.result.map((postcode) => {
      if (postcode.result !== null) {
        return finalOutput.validPostcodes.push({
          key: postcode.result.id,
          postcode: postcode.query,
          longitude: postcode.result.longitude,
          latitude: postcode.result.latitude
        });
      } else {
        return finalOutput.notValidPostcodes.push(postcode);
      }
    });
    return finalOutput;
  } catch (error) {
    return error;
  }
};

export default postCodeApiRequest;
