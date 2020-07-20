import React from 'react';
import { Button, Header, Icon} from 'semantic-ui-react'

const LandingPage = ({ page, setPage }) => {
    if (page !== "landing") {
        return null
    }
    return (
        <div>
            <Header as='h1'>We will meet again</Header>
            <Icon name='beer' size='big' />
            <Button onClick={() => setPage("form")}>Next Page</Button>
        </div>
    )
};


export default LandingPage;


