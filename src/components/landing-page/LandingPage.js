import React from "react";
import {
    Button,
    Avatar,
    Card,
    CardContent,
    makeStyles,
    Typography
} from "@material-ui/core";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";

const useStyles = makeStyles(theme => ({
    container: {
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    root: {
        backgroundColor: "#f7e4cb",
        width: "35%",
        height: "50%"
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        justifyContent: "center",
        fontSize: "large"
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around"
    },
    button: {
        justifyContent: "center",
        margin: "1rem",
        backgroundColor: "#f50057",
        color: "white"
    }
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
                        <SentimentVerySatisfiedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        We will meet again
                    </Typography>
                    <Button
                        className={classes.button}
                        variant="outlined"
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
