import React, { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import UserForm from "./components/userForm/UserForm";
import Locations from "./components/locations/Locations";
import "./App.css";

const App = () => {
  const [pageActive, setPageActive] = useState("landing");
  const [locations, setLocations] = useState([]);


  return (
    <div className="App">
      <LandingPage page={pageActive} setPage={setPageActive} />
      <UserForm page={pageActive} setPage={setPageActive} locations={locations} setLocations={setLocations}/>
      <Locations page={pageActive} setPage={setPageActive} />
    </div>
  );
};

export default App;
