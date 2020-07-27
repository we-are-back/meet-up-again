import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
  CardActions,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  root: {
    width: "35%",
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    padding: "3% 2%",
    justifyContent: "space-around",
  },
}));

const Result = ({ page, venueId, locations, setPageActive }) => {
  const classes = useStyles();

  if (page !== "result") {
    return null;
  }

  const handleBack = () => {
    setPageActive("locations");
  };

  const venue = locations.find((location) => venueId === location.id);
  return (
    <div className={classes.container}>
      <Card className={classes.root}>
        <CardHeader
          align="center"
          title={
            <div>
              <div style={{ marginTop: 10, fontSize: "1.3rem" }}>
                You are meeting at <br />
                <span
                  style={{
                    fontWeight: 400,
                    color: "primary",
                    fontSize: "2rem",
                  }}
                >
                  {venue.name}
                </span>
              </div>
              <div
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "Roboto",
                  fontWeight: 300,
                }}
              >
                Here is the address:
              </div>
            </div>
          }
        />
        <CardContent>
          <Typography component="p" align="center">
            {venue.location.formattedAddress.map((item) => (
              <div>{item}</div>
            ))}
          </Typography>
        </CardContent>

        <Button
          color="primary"
          align="center"
          variant="contained"
          onClick={handleBack}
          width="80%"
        >
          Select another venue
        </Button>
      </Card>
    </div>
  );
};

export default Result;
