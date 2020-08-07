import postCodeApiRequest from "./postcodesApiRequest";
import { getCenterOfBounds } from "geolib";
import foursquareApiRequest from "./foursquareApiRequest";

//returns object { notValidPostcodes: [], locations: [] }
const formSubmitLogic = async (postcode1, postcode2, category) => {
  const verifiedPostcodes = await postCodeApiRequest(postcode1, postcode2);
  const result = { faultyPostcodes: [], locations: [] };

  if (verifiedPostcodes.notValidPostcodes.length > 0) {
    const notValidPostcodeArray = verifiedPostcodes.notValidPostcodes.map(
      el => el.query
    );
    result.faultyPostcodes.push(notValidPostcodeArray);
    return result;
  }

  const centerPoint = getCenterOfBounds(verifiedPostcodes.validPostcodes);
  try {
    const apiCallResult = await foursquareApiRequest(
      centerPoint.latitude,
      centerPoint.longitude, 
      category
    );
    result.locations.push(apiCallResult);
  } catch (error) {
    console.log(error.data.message)
  }

  return result;
};

export default formSubmitLogic;
