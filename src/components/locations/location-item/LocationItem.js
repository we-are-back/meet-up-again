import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  ListItem,
  Typography,
  Divider,
  ListItemText,
  Grid, 
  Paper
} from "@material-ui/core";

const classes = {
  paper: {
    height: 140,
    width: 100
  }
};



const locationItem = ({ location, setPage, setVenueId }) => {
  const handleClick = () => {
    setVenueId(location.id);
    setPage("result");
  };

  const distance = (location.location.distance / 1000).toFixed(2);

  return (

    <Grid item key={location.name} container item xs={4}>
    <Paper className={classes.paper}>
    <Typography gutterBottom variant="h5" component="h2">
          {location.name}
        </Typography>
        <Typography>
        {location.categories.length
          ? location.categories[0].name
          : "info not available"}
        Distance from center: {distance}km
        </Typography>
        <Button color="primary" size="small" onClick={handleClick}>
          Select
        </Button>
    </Paper>
  </Grid>


  );
};
export default locationItem;
