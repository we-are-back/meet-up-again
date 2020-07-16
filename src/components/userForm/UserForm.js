import React from "react";
import Form from './Form';

const UserForm = ({ page, setPage, locations, setLocations }) => {

  if (page !== "form") {
    return null;
  }


  return (
    <>
      <div>
        <h1> hello I am the user form </h1>
        <Form page={page} setPage={setPage} locations={locations} setLocations={setLocations}/>
      </div>
    </>
  );
};

export default UserForm;
