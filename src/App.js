import React, { useState } from "react";
import LandingPage from "./components/landing-page/LandingPage";
import UserForm from "./components/userForm/UserForm";
import Locations from "./components/locations/Locations";
import "./App.css";

const App = () => {
  const [pageActive, setPageActive] = useState("landing");

  return (
    <div className="App">
      <LandingPage page={pageActive} setPage={setPageActive} />
      <UserForm page={pageActive} setPage={setPageActive} />
      <Locations page={pageActive} setPage={setPageActive} />
    </div>
  );
};

export default App;
