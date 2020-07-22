import React, { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import UserForm from "./components/userForm/UserForm";
import Locations from "./components/locations/Locations";
import Result from "./components/result/Result"
import { CssBaseline, Container, makeStyles } from "@material-ui/core";

import "./App.css";

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(30),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   }
// }));

const App = () => {
  // const classes = useStyles();
  const [pageActive, setPageActive] = useState("landing");
  const [locations, setLocations] = useState([]);
  const [venueId, setVenueId] = useState();

  return (
    <div>
      <Container maxWidth="lg" className="App">
        <CssBaseline />
        <LandingPage page={pageActive} setPage={setPageActive} />
        <UserForm
          page={pageActive}
          setPage={setPageActive}
          locations={locations}
          setLocations={setLocations}
        />
        <Locations
          page={pageActive}
          setPage={setPageActive}
          locations={locations}
          setLocations={setLocations}
          setVenueId={setVenueId}
        />
        <Result page={pageActive} venueId={venueId} locations={locations} setPageActive={setPageActive} />
      </Container>
    </div>
  );
};

export default App;
