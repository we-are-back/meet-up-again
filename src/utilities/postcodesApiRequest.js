import axios from "axios";

const postCodeApiRequest = async (postcodeOne, postcodeTwo) => {
    const baseUrl = "https://api.postcodes.io";
    const finalPostcodes = { validPostcodes: [], notValidPostcodes: [] };
    try {
        const postCodeResponse = await axios.post(`${baseUrl}/postcodes`, {
            "postcodes": [postcodeOne, postcodeTwo]
        });

        postCodeResponse.data.result.map(postcode => {
            if (postcode.result !== null) {
                return finalPostcodes.validPostcodes.push({
                    // postcode: postcode.query,
                    longitude: postcode.result.longitude,
                    latitude: postcode.result.latitude
                })
            } else {
                return finalPostcodes.notValidPostcodes.push(postcode);
            }
        })
        return finalPostcodes;
    } catch (error) {
        return error;
    }
};



export default postCodeApiRequest;