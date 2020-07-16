// // component
import React from "react";
import LocationItem from "./location-item/LocationItem";

const Locations = ({ page, setPage, locations, setLocations }) => {
  if (page !== "locations") {
    return null;
  }
  console.log("locations in locationComp", locations);
  //   console.log(formResult.locations, "form locations");
  return (
    <div>
      <h1>List of locations</h1>
      {locations.map(location => (
        <LocationItem location={location} />
      ))}
      <button onClick={() => setPage("result")}>Results</button>
    </div>
  );
};

export default Locations;
