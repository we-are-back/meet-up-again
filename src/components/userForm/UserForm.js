import React from "react";
import Form from './Form';
import { CardHeader, CardContent, Typography, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    width: "35%",
    minWidth: 300,
    height: "50%"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around"
  }
}));


const UserForm = ({ page, setPage, locations, setLocations }) => {
  const classes = useStyles();


  if (page !== "form") {
    return null;
  }


  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader>
          Where are you coming from?
        </CardHeader>
        <CardContent className={classes.card}>
          <Typography>Please enter your postcodes</Typography>
          <Form page={page} setPage={setPage} locations={locations} setLocations={setLocations} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
