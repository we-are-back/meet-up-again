import React from 'react';
import { Grid, Button, Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme) => ({
    outerTwo: {
        // width: "50vw",
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItmes: "center",
        // height: "30vh",
        border: "2px solid white",
        backgroundColor: "white",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    }
}));


const LandingPage = ({ page, setPage }) => {
    const classes = useStyles();

    if (page !== "landing") {
        return null
    }

    return (

        // <Box component="main" maxWidth="large" className={classes.outerTwo}>
        <Grid
            //    container
            //    className={classes.outerTwo}
            //    item large={3}
            //    direction="column"
            //    justify="center"
            //    alignItems="center"
            //    backgroundColor="white"
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
            style={{ marginTop: "300px" }}

        >
            <Grid item>
                <Avatar className={classes.avatar}>
                    <SentimentVerySatisfiedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    We will meet again
                </Typography>
                <Button variant="outlined" size="large" onClick={() => setPage("form")}>Let's start</Button>
                {/* </Box > */}
            </Grid>
        </Grid>
    )
};


export default LandingPage;


