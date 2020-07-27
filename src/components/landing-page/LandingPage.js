import React from "react";
import {
  Button,
  Avatar,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

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
  },
  avatar: {
    backgroundColor: theme.palette.secondary.dark,
    justifyContent: "center",
    width: "40px",
    height: "40px",
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "5% 0",
  },
  button: {
    justifyContent: "center",
    color: "primary",
  },
  heading: {
    margin: "15% 0",
  },
}));

const LandingPage = ({ page, setPage }) => {
  const classes = useStyles();

  if (page !== "landing") {
    return null;
  }

  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardContent className={classes.card}>
          <Avatar className={classes.avatar}>
            <SentimentVerySatisfiedIcon fontSize="large" />
          </Avatar>
          <Typography
            className={classes.heading}
            component="h1"
            variant="h1"
            align="center"
          >
            We will meet again
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            size="large"
            onClick={() => setPage("form")}
          >
            Let's start
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LandingPage;
