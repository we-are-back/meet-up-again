import React from 'react';
import { Card, CardContent, CardHeader, Button, Typography, CardActions, makeStyles } from '@material-ui/core';

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

const Result = ({ page, venueId, locations, setPageActive }) => {
    const classes = useStyles();

    if (page !== "result") {
        return null;
    }

    const handleBack = () => {
        setPageActive("locations")
    }

    const venue = locations.find(location => venueId === location.id)
    return (
        <div className={classes.container}>
            <Card className={classes.root}>
                <CardHeader title={
                    <div>
                        <div style={{ marginTop: 10 }}>You are meeting at <br /><span style={{ fontWeight: 600, color: 'primary', fontSize: "1.8rem" }}> {venue.name}</span></div>
                        <div style={{ fontSize: '1rem', fontWeight: 300 }}>Here is the address:</div>
                    </div>
                }
                />
                <CardContent>
                    <Typography component="p" align="center">{venue.location.formattedAddress.map(item => <div>{item}</div>)}</Typography>
                </CardContent>
                <CardActions>
                    <Button color="primary" align="center" variant="contained" onClick={handleBack}>Select another venue</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Result;