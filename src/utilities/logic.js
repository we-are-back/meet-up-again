import postCodeApiRequest from "./postcodesApiRequest";
import { getCenterOfBounds } from "geolib";
import foursquareApiRequest from "./foursquareApiRequest";

//returns object { notValidPostcodes: [], locations: [] }
const formSubmitLogic = async (postcode1, postcode2) => {
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
  console.log(result.locations);
  const apiCallResult = await foursquareApiRequest(
    centerPoint.latitude,
    centerPoint.longitude
  );
  result.locations.push(apiCallResult);
  console.log(result.locations);
  return result;
};

export default formSubmitLogic;
