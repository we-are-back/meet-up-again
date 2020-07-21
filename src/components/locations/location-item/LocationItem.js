import React, { useState } from "react";
import Locations from "../Locations";

const locationItem = ({ location, setPage, setVenueId }) => {
  console.log(location)


  const handleClick = () => {
    setVenueId(location.id)
    setPage("result")
  }

  return (
    <div>
      <h2>{location.name}</h2>
      {/* <img src={`${location.categories[0].icon.prefix}${location.categories[0].icon.suffix}`}></img> */}
      <h4>{location.categories.length ? location.categories[0].name : "info not available"}</h4>
      {/* <h4>{location.location.formattedAddress}</h4> */}
      <h4>Distance from center: {location.location.distance}m</h4>
      <button onClick={handleClick}>Select</button>
    </div>
  );
};
export default locationItem;
