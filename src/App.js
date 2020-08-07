import React, { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import UserForm from "./components/userForm/UserForm";
import Locations from "./components/locations/Locations";
import Result from "./components/result/Result";
import "./App.css";
import { CssBaseline, Container } from "@material-ui/core";
import imageOne from "./images/highFive-01.png";
import imageTwo from "./images/highFive-02.png";
import imageThree from "./images/highFive-03.png";
import imageFour from "./images/highFive-04.png";

const App = () => {
  const images = [imageOne, imageTwo, imageThree, imageFour];
  const [pageActive, setPageActive] = useState("landing");
  const [locations, setLocations] = useState([]);
  const [venueId, setVenueId] = useState();
  const [image, setImage] = useState(imageOne);

  return (
    <Container maxWidth="lg">
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
        images={images}
        setImage={setImage}
      />
      <Result
        page={pageActive}
        venueId={venueId}
        locations={locations}
        setPageActive={setPageActive}
        image={image}
        setImage={setImage}
      />
    </Container>
  );
};

export default App;
