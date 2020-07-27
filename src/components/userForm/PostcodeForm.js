import React, { useState } from "react";
import formSubmitLogic from "../../utilities/logic";
import { TextField, Button, InputLabel, Select, MenuItem, Box, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2% 0",
    margin: theme.spacing(2, 0)
  },
  input: {
    margin : "5px 0"
  },
  buttonClass: {
    marginTop: "15px"
  }
}));

const PostcodeForm = ({ page, setPage, locations, setLocations }) => {
  const classes = useStyles();
  const [postCode1, setPostCode1] = useState("");
  const [postCode2, setPostCode2] = useState("");
  const [category, setCategory] = useState("");

  const formSubmit = async event => {
    event.preventDefault();
    const formResult = await formSubmitLogic(postCode1, postCode2, category);

    if (formResult.faultyPostcodes.length > 0) {
      if (formResult.faultyPostcodes.includes(postCode1)) setPostCode1("");
      if (formResult.faultyPostcodes.includes(postCode2)) setPostCode2("");
      return alert(`this postcode is not valid: ${formResult.faultyPostcodes}`);
    }
    setLocations(locations.concat(...formResult.locations));
    setPage("locations");
  };

  const handleChange = (event) => {
    console.log(event.target.value)
    setCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit} data-testid="form-submit">
      <TextField className={classes.input}
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
       className={classes.input}
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
      <InputLabel id="label"  className={classes.input}>Category</InputLabel>
        <Select 
      
        required
        fullWidth
        labelId="label" 
        id="select" 
        value={category}
        onChange={handleChange}
        >
          <MenuItem value={"4d4b7104d754a06370d81259"}>Arts & Entertainment</MenuItem>
          <MenuItem value={"4d4b7105d754a06374d81259"}>Food</MenuItem>
          <MenuItem value={"4d4b7105d754a06376d81259"}>Nightlife Spot</MenuItem>
          <MenuItem value={"4d4b7105d754a06377d81259"}>Outdoors & Recreation</MenuItem>
      </Select>
      <Button
      className={classes.buttonClass}
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

export default PostcodeForm;

