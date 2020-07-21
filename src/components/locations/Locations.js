// // component
import React from "react";
import LocationItem from "./location-item/LocationItem";
import { Button, Typography, Container } from "@material-ui/core";


const Locations = ({ page, setPage, locations, setLocations, setVenueId }) => {
  if (page !== "locations") {
    return null;
  }

  return (
    <Container maxWidth="lg">
      <Typography component="h1" variant="h2">List of locations</Typography>
      {!locations.length ? <p>No locations could be found</p> : locations.map(location => (
        <LocationItem key={location.id} location={location} setPage={setPage} setVenueId={setVenueId} />
      ))}

      <Button variant="contained" color="primary" onClick={() => setPage("form")}>Go back</Button>
    </Container>
  );
};

export default Locations;
