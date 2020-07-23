import React, { useState } from "react";
import formSubmitLogic from "../../utilities/logic";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2% 0 8% 0",
    margin: theme.spacing(2, 0)
  },
}));

const UserForm = ({ page, setPage, locations, setLocations }) => {
  const classes = useStyles();
  const [postCode1, setPostCode1] = useState("");
  const [postCode2, setPostCode2] = useState("");

  const formSubmit = async event => {
    event.preventDefault();
    const formResult = await formSubmitLogic(postCode1, postCode2);

    if (formResult.faultyPostcodes.length > 0) {
      if (formResult.faultyPostcodes.includes(postCode1)) setPostCode1("");
      if (formResult.faultyPostcodes.includes(postCode2)) setPostCode2("");
      return alert(`this postcode is not valid: ${formResult.faultyPostcodes}`);
    }
    setLocations(locations.concat(...formResult.locations));
    setPage("locations");
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit} data-testid="form-submit">
      <TextField
        required
        id="outlined-required"
        label="Postcode One"
        fullWidth
        variant="outlined"
        type="text"
        value={postCode1}
        name="PostCodeOne"
        data-testid="Enter your postcode"
        onChange={e => setPostCode1(e.target.value)}
        autoFocus
        autoCompletes
      />
      <TextField
        required
        fullWidth
        autoComplete
        id="outlined-required"
        label="Postcode Two"
        variant="outlined"
        type="text"
        value={postCode2}
        name="PostCodeTwo"
        data-testid="Enter your friend postcode"
        onChange={e => setPostCode2(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained" color="primary"
        type="submit"
        value="Find Locations"
        data-testid="input-submit"
      >
        Find a location
      </Button>
    </form>
  );
};

export default UserForm;

