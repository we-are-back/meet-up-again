// // component
import React from "react";

const Locations = ({ page, setPage, locations, setLocations }) => {
  if (page !== "locations") {
    return null;
  }
  return (
    <div>
      <h1>List of locations</h1>
      <button onClick={() => setPage("result")}>Results</button>
    </div>
  );
};

export default Locations;
