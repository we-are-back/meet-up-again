// // component
import React from "react";
import LocationItem from "./location-item/LocationItem";

const Locations = ({ page, setPage, locations, setLocations, setVenueId }) => {
  if (page !== "locations") {
    return null;
  }

  return (
    <div>
      <h1>List of locations</h1>
      {!locations.length ? <p>No locations could be found</p> : locations.map(location => (
        <LocationItem key={location.id} location={location} setPage={setPage} setVenueId={setVenueId} />
      ))}

      <button onClick={() => setPage("form")}>Go back</button>
    </div >
  );
};

export default Locations;
