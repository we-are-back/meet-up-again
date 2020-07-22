import React from "react";
import Form from './Form';
import { Button, Header, Icon} from 'semantic-ui-react';



const UserForm = ({ page, setPage, locations, setLocations }) => {

  if (page !== "form") {
    return null;
  }


  return (
    <>
      <div>
        <Header as ="h1">Where are you coming from? Enter Postcodes</Header>
        <Form page={page} setPage={setPage} locations={locations} setLocations={setLocations}/>
      </div>
    </>
  );
};

export default UserForm;
