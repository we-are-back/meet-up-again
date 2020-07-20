import React from 'react';
import { Button, Header, Icon} from 'semantic-ui-react'


const Result = ({page, venueId, locations, setPageActive}) => {
    if (page !== "result") {
        return null;
      }
    
    const handleBack = () => {
        setPageActive("locations")
    }

      const venue = locations.find(location => venueId === location.id)
    return (
        <div>
            <Header as="h1">Hurray, you are going to:</Header>
            <Header as="h2">{venue.name}</Header>
            <p>{venue.location.formattedAddress.map(item => <p>{item}</p>)}</p>
            <Header as="h3">What a great place to meet!</Header>
            <button onClick={handleBack}>Select another venue</button>
        </div>
    )
}

export default Result;