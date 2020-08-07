import React from "react";
import { Button, Typography, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(6),

    border: "0.5px solid rgba(5, 31, 83, 1)",
    borderRadius: "5px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(251, 243, 233, 1)",
    height: "200px",
  },
}));

const LocationItem = ({ location, setPage, setVenueId, images, setImage }) => {
  const classes = useStyles();
  const handleClick = () => {
    setVenueId(location.id);
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);
    setPage("result");
  };

  const distance = (location.location.distance / 1000).toFixed(2);

  return (
    <Grid item xs={12} sm={6} md={4} spacing={2}>
      <Paper className={classes.paper}>
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
      </Paper>
    </Grid>
  );
};
export default LocationItem;
