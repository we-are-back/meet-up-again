import React, { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import UserForm from "./components/userForm/UserForm";
import Locations from "./components/locations/Locations";
import Result from "./components/result/Result";
import "./App.css";
import { CssBaseline, Container, makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   outer: {
//       backgroundColor: 'yellow',
//       zIndex: 100,
//       border: "2px solid black",
      
//   }
// }));

const App = () => {
  // const classes = useStyles();
  const [pageActive, setPageActive] = useState("landing");
  const [locations, setLocations] = useState([]);
  const [venueId, setVenueId] = useState();

  return (
    // <div>
    <Container maxWidth="large">
        {/* <CssBaseline /> */}
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
    // </div>
  );
};


export default App;
