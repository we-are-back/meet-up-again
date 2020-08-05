import React from "react";
import { Button, Typography, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(6),
    minHeight: "60px",
    border: "0.5px solid rgba(5, 31, 83, 1)",
    borderRadius: "5px",
    backgroundColor: "rgba(251, 243, 233, 1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const LocationItem = ({ location, setPage, setVenueId }) => {
  const classes = useStyles();
  const handleClick = () => {
    setVenueId(location.id);
    setPage("result");
  };

  const distance = (location.location.distance / 1000).toFixed(2);

  return (
    <Grid item className={classes.item} xs={12} sm={6} md={4} spacing={2}>
      <div>
        <Typography gutterBottom variant="h5" component="h2">
          {location.name}
        </Typography>
        <Typography>
          {location.categories.length
            ? location.categories[0].name
            : "info not available"}
        </Typography>
        <Typography>Distance from center: {distance}km</Typography>
      </div>
      <Button color="primary" size="small" onClick={handleClick}>
        Select
      </Button>
    </Grid>
  );
};
export default LocationItem;
