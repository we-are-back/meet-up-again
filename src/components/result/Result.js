import React from 'react';
import { Card, CardContent, Button, Typography, CardActions } from '@material-ui/core';

const Result = ({ page, venueId, locations, setPageActive }) => {
    if (page !== "result") {
        return null;
    }

    const handleBack = () => {
        setPageActive("locations")
    }

    const venue = locations.find(location => venueId === location.id)
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="subtitle1" paragraph>Hurray, you are going to:</Typography>
                <Typography component="h2" variant="h5">{venue.name}</Typography>
                <Typography component="h3" variant="h5">{venue.location.formattedAddress.map(item => <p>{item}</p>)}</Typography>
                <Typography variant="subtitle1" paragraph>What a great place to meet!</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" variant="contained" onClick={handleBack}>Select another venue</Button>
            </CardActions>
        </Card>
    )
}

export default Result;