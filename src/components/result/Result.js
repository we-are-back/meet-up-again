import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Typography,
  CardMedia,
  makeStyles,
} from "@material-ui/core";
import imageOne from "../../images/highFive-01.png";
import imageTwo from "../../images/highFive-02.png";
import imageThree from "../../images/highFive-03.png";
import imageFour from "../../images/highFive-04.png";

const images = [imageOne, imageTwo, imageThree, imageFour];
var randomImage = images[Math.floor(Math.random() * images.length)];

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
    padding: "30px 20px",
  },
  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },
  media: {
    height: 0,
    paddingTop: "59.25%",
  },
  header: {
    marginTop: 10,
    fontSize: "4rem",
    lineHeight: "1",
    fontFamily: "Yeseva One",
    color: theme.palette.primary.dark,
  },
  subheader: {
    fontSize: "1.2rem",
    fontFamily: "Roboto",
    fontWeight: "200",
    color: theme.palette.text.secondary,
  },
  intro: {
    fontSize: "1.4rem",
    fontFamily: "Roboto",
    fontWeight: "200",
    marginTop: "30px",
    color: theme.palette.text.secondary,
  },
  address: {
    fontSize: "1.2rem",
    fontWeight: "400",
    lineHeight: "1.4",
    color: theme.palette.text.primary,
  },
  button: {
    justifyContent: "center",
    color: "primary",
    marginTop: "20px",
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
        <CardMedia
          image={randomImage}
          className={classes.media}
          title="High Five"
        />
        <div className={classes.content}>
          <CardHeader
            align="center"
            title={
              <div>
                <div className={classes.subheader}>
                  You are meeting at
                  <br />
                  <span className={classes.header}>{venue.name}</span>
                </div>
                <div className={classes.intro}>Here is the address:</div>
              </div>
            }
          />
          <CardContent>
            <Typography component="div" align="center">
              {venue.location.formattedAddress.map((item) => (
                <div className={classes.address} key={item}>
                  {item}
                </div>
              ))}
            </Typography>
          </CardContent>

          <Button
            variant="contained"
            onClick={handleBack}
            size="large"
            className={classes.button}
            color="primary"
          >
            Select another venue
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Result;
