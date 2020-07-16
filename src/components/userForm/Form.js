import React, {useState} from "react";
import formSubmitLogic from "../../utilities/logic";

const Form = ({ page, setPage, locations, setLocations }) => {
  const [postCode1, setPostCode1] = useState("");
  const [postCode2, setPostCode2] = useState("");

  const formSubmit =  async event => {
    event.preventDefault();
    const formResult = await formSubmitLogic(postCode1,postCode2);

    if(formResult.faultyPostcodes.length > 0){
      if (formResult.faultyPostcodes.includes(postCode1)) setPostCode1("");
      if (formResult.faultyPostcodes.includes(postCode2)) setPostCode2("");
      return alert(`this postcode is not valid: ${formResult.faultyPostcodes}`);
    }
    setLocations(formResult.locations);
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
      </form>
    </>
  );
};


export default Form;
