import React from "react";
import LocationItem from "./location-item/LocationItem";
import {
  Button,
  Grid,
  makeStyles,
  Card,
  CardHeader,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "80%",
    height: "90%",
    minWidth: 300,
    padding: "3% 2%",
    overflow: "auto",
  },
  header: {
    marginTop: 10,
    fontSize: "4rem",
    color: theme.palette.text.primary,
  },
  subheader: {
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "200",
    color: theme.palette.text.secondary,
  },
}));

const Locations = ({ page, setPage, locations, setLocations, setVenueId }) => {
  const classes = useStyles();
  const onButtonClick = () => {
    setPage("form");
    setLocations([]);
  };

  if (page !== "locations") {
    return null;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div>
              <div className={classes.header} style={{}}>
                Here is a list of venues.
              </div>
              <div className={classes.subheader}>
                Please select your favorite.
              </div>
            </div>
          }
        />
        <CardContent className={classes.content}>
          <Grid container spacing={3}>
            {!locations.length ? (
              <p>No locations could be found</p>
            ) : (
              locations
                .sort((a, b) => a.location.distance - b.location.distance)
                .map((location) => (
                  <LocationItem
                    key={location.id}
                    location={location}
                    setPage={setPage}
                    setVenueId={setVenueId}
                  />
                ))
            )}
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onButtonClick}
          >
            Go back
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Locations;
