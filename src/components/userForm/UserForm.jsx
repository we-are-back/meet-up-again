import React, { useState } from "react";
import checkPostcodes from "../../utilities/postcodesApiRequest";

const UserForm = ({ page, setPage }) => {
  const [postCode1, setPostCode1] = useState("");
  const [postCode2, setPostCode2] = useState("");
  const [returnedPostcodes, setReturnedPostcodes] = useState([]);

  if (page !== "form") {
    return null;
  }

  const formSubmit = async event => {
    event.preventDefault();

    const verifiedPostcodes = await checkPostcodes(postCode1, postCode2);

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
      <div>
        <h1> hello I am the user form </h1>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            value={postCode1}
            name="PostCodeOne"
            onChange={e => setPostCode1(e.target.value)}
          />
          <input
            type="text"
            value={postCode2}
            name="PostCodeTwo"
            onChange={e => setPostCode2(e.target.value)}
          />
          <input type="submit" value="Find Locations" />
        </form>
      </div>
    </>
  );
};

export default UserForm;
