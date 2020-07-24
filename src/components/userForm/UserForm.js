import React from "react";
import Form from './Form';
import { CardHeader, CardContent, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  root: {
    width: "35%",
    height: "60%",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    padding: "3% 2%",
    justifyContent: "space-around",
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
        <CardHeader title={
          <div>
            <div style={{ marginTop: 10 }}>Where are you coming from?</div>
            <div style={{ fontSize: '1rem', fontWeight: 300 }}>Please enter your postcodes.</div>
          </div>
        }
        />
        <CardContent >
          <Form page={page} setPage={setPage} locations={locations} setLocations={setLocations} />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
