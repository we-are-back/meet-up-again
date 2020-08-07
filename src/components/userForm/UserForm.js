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
    padding: "20px",
    justifyContent: "space-between",
  },
  header: {
    fontSize: "2rem",
    lineHeight: "1",
    fontFamily: "Yeseva One",
    color: theme.palette.primary.dark,
  },
  subheader: {
    marginTop: "5px",
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "200",
    color: theme.palette.text.secondary,
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
              <div className={classes.header}>
                Where are you coming from and what do you want to do?
              </div>
              <div className={classes.subheader}>
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
