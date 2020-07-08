import React, { useState } from "react";
import checkPostcodes from "../../utilities/postcodesApiRequest";

const UserForm = ({ page, setPage }) => {
    const [postCode1, setPostCode1] = useState("");
    const [postCode2, setPostCode2] = useState("");
    const arr = [postCode1, postCode2]
  if (page !== "form") {
    return null;
  }
  
  const formSubmit = async event => {
    event.preventDefault();

    const verifiedPostcodes = await checkPostcodes("n22 5ad", "n16 9lxxxx");

    if (verifiedPostcodes.notValidPostcodes.length > 0) {
      const notValidePostcodeArray = verifiedPostcodes.notValidPostcodes;
      console.log(notValidePostcodeArray);
      alert(
        `this postcode is not valid: ${notValidePostcodeArray.map(
          el => el.query
        )}`
      );
    } setPage('locations')
  };

    return (
        <>
        <div>
            <h1> hello I am the user form </h1>
            <form onSubmit={formSubmit}>
                <input type="text" name="PostCodeOne" onChange={e => setPostCode1(e.target.value)} />
                <input type="text" name="PostCodeTwo" onChange={e => setPostCode2(e.target.value)} />
                <input type="submit" value="Find Locations" />
            </form>
            <h2>Arr: {arr}</h2>
            </div>
        </>
    )
};

export default UserForm;
