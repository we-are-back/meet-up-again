import React from 'react';
import { Button, Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <SentimentVerySatisfiedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    We will meet again
                </Typography>

                <Button variant="outlined" size="large" onClick={() => setPage("form")}>Next Page</Button>
            </div>
        </Container >
    )
};


export default LandingPage;


