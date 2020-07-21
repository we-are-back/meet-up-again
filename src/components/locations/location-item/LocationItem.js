import React from "react";
import { Card, Button, CardActions, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const locationItem = ({ location, setPage, setVenueId }) => {
  // const classes = useStyles();

  const handleClick = () => {
    setVenueId(location.id);
    setPage("result");
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography component="h2" variant="h5">{location.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{location.categories.length ? location.categories[0].name : "info not available"}</Typography>
        <Typography variant="subtitle1" paragraph>Distance from center: {location.location.distance}m</Typography>
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleClick}>Select</Button>
      </CardActions>
    </Card>
  );
};
export default locationItem;
