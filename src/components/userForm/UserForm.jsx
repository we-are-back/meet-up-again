import React from "react";


const UserForm = ({ page, setPage}) => {
    if(page !== "form") {
        return null;
    }
    return (
        <>
        <div>
            <h1> hello I am the user form </h1>
            <form onSubmit={() => setPage('locations')}>
                <input type="text" name="PostCodeOne" />
                <input type="text" name="PostCodeTwo" />
                <input type="submit" value="Find Locations" />
            </form>
            </div>
        </>

    )
};

export default UserForm;