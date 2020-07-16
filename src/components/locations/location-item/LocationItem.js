import React, { useState } from "react";
import Locations from "../Locations";

const locationItem = ({ location }) => {
  console.log(location);
  return (
    <>
      <h1>{location.name}</h1>
    </>
  );
};
export default locationItem;
