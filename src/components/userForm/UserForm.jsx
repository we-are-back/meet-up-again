import React, { useState } from "react";


const UserForm = ({ page, setPage}) => {
    const [postCode1, setPostCode1] = useState("");
    const [postCode2, setPostCode2] = useState("");
    const arr = [postCode1, postCode2]

    if(page !== "form") {
        return null;
    }
    return (
        <>
        <div>
            <h1> hello I am the user form </h1>
            <form onSubmit={() => setPage('locations')}>
                <input type="text" name="PostCodeOne" onChange={e => setPostCode1(e.target.value)} />
                <input type="text" name="PostCodeTwo" onChange={e => setPostCode2(e.target.value)} />
                <input type="submit" value="Find Locations" />
            </form>
            <h2>Arr: {arr}</h2>
            </div>
        </>

    )
};

export default UserForm;