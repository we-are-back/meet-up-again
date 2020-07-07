import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserForm = ({ page, setPage}) => {
    const [postCode1, setPostCode1] = useState("");
    const [postCode2, setPostCode2] = useState("");
    const [data, setData] = useState({result: []});

    const arr = [postCode1, postCode2]
    const [query, setQuery] = useState('postcode1')

    useEffect(async () => {
        const result = await axios(
          `https://api.postcodes.io/postcodes/search?query=${query}`,
        );
        setData(result.data);
   },
//    sorry i'm breaking everything! ^^
//haha should we wrap up?
//https://www.robinwieruch.de/react-hooks-fetch-data

      fetchData()
    }, [query]);


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
            {/* <ul>
                {data.hits.map(item => (
                    <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                    </li>
                ))}
            </ul> */}
            <h2>Arr: {arr}</h2>
            <h2>{data}</h2>
            </div>
        </>

    )
};

export default UserForm;