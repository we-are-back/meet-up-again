import React from "react";
import checkPostcodes from "../../utilities/postcodesApiRequest";

const UserForm = ({ page, setPage }) => {
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
    }
  };

  return (
    <>
      <div>
        <h1> hello I am the user form </h1>
        <form onSubmit={formSubmit}>
          <input type="text" name="PostCodeOne" />
          <input type="text" name="PostCodeTwo" />
          <input type="submit" value="Find Locations" />
        </form>
      </div>
    </>
  );
};

export default UserForm;
