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
} from "@material-ui/core";

const locationItem = ({ location, setPage, setVenueId }) => {
  const handleClick = () => {
    setVenueId(location.id);
    setPage("result");
  };

  const distance = (location.location.distance / 1000).toFixed(2);

  return (
    <Card style={{ width: "25%", minWidth: "250px", height: "auto", padding: "10px", display: "flex", flexDirection: "column"}} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {location.name}
        </Typography>
        {location.categories.length
          ? location.categories[0].name
          : "info not available"}
        Distance from center: {distance}km
      </CardContent>
      <CardActions>
        <Button color="primary" size="small" onClick={handleClick}>
          Select
        </Button>
      </CardActions>
    </Card>
  );
};
export default locationItem;
