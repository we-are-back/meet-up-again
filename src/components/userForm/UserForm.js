import React from "react";
import PostcodeForm from "./PostcodeForm";
import { CardHeader, CardContent, Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "35vw",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    padding: "0 2%",
    justifyContent: "space-around",
  },
}));

const UserForm = ({ page, setPage, locations, setLocations }) => {
  const classes = useStyles();

  if (page !== "form") {
    return null;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          title={
            <div>
              <div
                style={{
                  marginTop: 15,
                  fontFamily: "Yeseva One",
                  fontSize: "1.8rem",
                }}
              >
                Where are you coming from and what do you want to do?
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: 200,
                  fontFamily: "Roboto",
                }}
              >
                Please enter your postcodes and select a category.
              </div>
            </div>
          }
        />
        <CardContent>
          <PostcodeForm
            page={page}
            setPage={setPage}
            locations={locations}
            setLocations={setLocations}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default UserForm;
