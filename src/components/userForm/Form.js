import React, { useState } from "react";
import formSubmitLogic from "../../utilities/logic";
import { TextField, Button, Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { flexbox } from "@material-ui/system";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    // '& .MuiBox-root MuiBox-root-5': {
    //   paddingTop: theme.spacing(1),
    //   display: 'flex',
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    // },
    '& .MuiTextField-root': {
      margin: theme.spacing(3),
      width: '25ch',
    },
    // paper: {
    //   marginTop: theme.spacing(100),
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  },
}));

// root: {
//   display: 'flex',
//   flexWrap: 'wrap',
// },
// textField: {
//   marginLeft: theme.spacing(1),
//   marginRight: theme.spacing(1),
//   width: '25ch',
// },

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
    <div>
      <Box display="flex"
        alignItems="center"
        justifyContent="center"
        component="main" maxWidth="md" marginTop='200px'>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit} data-testid="form-submit">
          <TextField
            required
            id="outlined-required"
            label="Postcode One"
            variant="outlined"
            type="text"
            value={postCode1}
            name="PostCodeOne"
            data-testid="Enter your postcode"
            onChange={e => setPostCode1(e.target.value)}
          />
          <TextField
            required
            id="outlined-required"
            label="Postcode Two"
            variant="outlined"
            type="text"
            value={postCode2}
            name="PostCodeTwo"
            data-testid="Enter your friend postcode"
            onChange={e => setPostCode2(e.target.value)}
          />
          <div className={classes.root}>
            <Button
              variant="contained" color="primary"
              type="submit"
              value="Find Locations"
              data-testid="input-submit"
            >
              Find a location
          </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default UserForm;

