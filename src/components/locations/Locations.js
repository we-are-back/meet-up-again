// // component
import React from "react";
import LocationItem from "./location-item/LocationItem";
import { Button, Grid, Typography, makeStyles,Card, CardHeader, CardContent, CardActions} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "80%",
    height: "90%",
    minWidth: 300,
    padding: "3% 2%",
    overflow: "auto"
  },
  content: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  }
}));


const Locations = ({ page, setPage, locations, setLocations, setVenueId }) => {
  const classes = useStyles();

  if (page !== "locations") {
    return null;
  }

  return (
    <div className={classes.container}>
    <Card className={classes.root}>
    <CardHeader
          title={
            <div>
              <div style={{ marginTop: 10 }}>Here is a list of venues.</div>
              <div style={{ fontSize: "1rem", fontWeight: 300 }}>
                Please select your favorite.
              </div>
            </div>
          }
        />
        <CardContent className={classes.content} maxWidth="md">
      <Grid container spacing={8}>
      {!locations.length ? <p>No locations could be found</p> : locations.map(location => (
        <LocationItem key={location.id} location={location} setPage={setPage} setVenueId={setVenueId} />
      ))}
      </Grid>
</CardContent>
<CardActions>

      <Button variant="contained" color="primary" onClick={() => setPage("form")}>Go back</Button>
      </CardActions>

   </Card>
   </div>
  );
};

export default Locations;
