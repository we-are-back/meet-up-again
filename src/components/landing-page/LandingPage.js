import React from 'react';

const LandingPage = ({ page, setPage }) => {
    if (page !== "landing") {
        return null
    }
    return (
        <div>

            <h1>Landing page </h1>
            <button onClick={() => setPage("form")}>next page</button>
        </div>
    )
};


export default LandingPage;


