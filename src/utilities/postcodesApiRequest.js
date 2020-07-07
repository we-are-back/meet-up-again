import axios from "axios";


const checkPostcodes = async (postcodeOne, postcodeTwo) => {
    const baseUrl = "https://api.postcodes.io";

    const finalPostcodes = { validPostcodes: [], notValidPostcodes: [] };
    console.log(baseUrl)
    try {
        const postCodeResponse = await axios.post(`${baseUrl}/postcodes`, {
            "postcodes": [postcodeOne, postcodeTwo]
        });

        postCodeResponse.data.result.map(postcode => {
            if (postcode.result !== null) {
                return finalPostcodes.validPostcodes.push({
                    postcode,
                    longitude: "",
                    latitutde: ""
                })
            } else {
                return finalPostcodes.notValidPostcodes.push(postcode.postcode);
            }
        })
        return finalPostcodes;
    } catch (error) {
        return error;
    }
};



export default checkPostcodes;