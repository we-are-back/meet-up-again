import React, { useState } from "react";
import postCodeApiRequest from "../../utilities/postcodesApiRequest";


const Form = ({ page, setPage }) => {
  const [postCode1, setPostCode1] = useState("");
  const [postCode2, setPostCode2] = useState("");
  const [returnedPostcodes, setReturnedPostcodes] = useState([]);

  const formSubmit = async event => {
    event.preventDefault();

    const verifiedPostcodes = await postCodeApiRequest(postCode1, postCode2);

    if (verifiedPostcodes.notValidPostcodes.length > 0) {
      const notValidPostcodeArray = verifiedPostcodes.notValidPostcodes.map(
        el => el.query
      );
      console.log(notValidPostcodeArray);
      if (notValidPostcodeArray.includes(postCode1)) {
        setPostCode1("");
      }
      if (notValidPostcodeArray.includes(postCode2)) {
        setPostCode2("");
      }

      return alert(`this postcode is not valid: ${notValidPostcodeArray}`);
    }

    setReturnedPostcodes(
      returnedPostcodes.push(verifiedPostcodes.validPostcodes)
    );
    setPage("locations");
  };
  return (
    <>
      <form onSubmit={formSubmit} data-testid="form-submit">
        <input
          type="text"
          value={postCode1}
          name="PostCodeOne"
          data-testid="Enter your postcode"
          onChange={(e) => setPostCode1(e.target.value)}
        />
        <input
          type="text"
          value={postCode2}
          name="PostCodeTwo"
          data-testid="Enter your friend postcode"
          onChange={(e) => setPostCode2(e.target.value)}
        />
        <input
          type="submit"
          value="Find Locations"
          data-testid="input-submit"
        />
        {/* <button onSubmit={formSubmit} data-testid="form-submit">CLICK</button> */}
      </form>
    </>
  );
};

export default Form;
