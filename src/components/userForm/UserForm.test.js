import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import UserForm from "./UserForm";
import App from "../../App";
import Form from "../userForm/Form";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserForm />, div);
});

// it('UserForm returns null', () => {
//     const { baseElement } = render(<UserForm />)
//     console.log(baseElement)
//     expect(baseElement).not.toContain(/I am the user form/i);
// })

describe("Test user form", () => {
  let component;
  const onSubmit = jest.fn();

  beforeEach(() => {
    component = render(<App onClick={onSubmit}/>);
    const button = component.container.querySelector("button");
    fireEvent.click(button);
  });

  it("Userform is returned when state is set to form", () => {
    const { getByText } = component;
    const header = getByText(/I am the user form/i);
    expect(header).toBeInTheDocument();
  });

  it("Userform can type into the first input field", () => {
    const { getByTestId } = component;
    const inputField = getByTestId("Enter your postcode");
    expect(inputField.value).toBe("");
    fireEvent.change(inputField, { target: { value: "xxxxx" } });
    expect(inputField.value).toBe("xxxxx");
  });

  it("Userform can type into the  second input field", () => {
    const { getByTestId } = component;
    const inputField = getByTestId("Enter your friend postcode");
    expect(inputField.value).toBe("");
    fireEvent.change(inputField, { target: { value: "xxxxx" } });
    expect(inputField.value).toBe("xxxxx");
  });

  afterEach(cleanup);
});

describe("", () => {
  // let component;

  // if both input field have a postcode and user press the button
  // it("Button click runs a function that takes two input fields as arguments", () => {
  //   const onSubmit = jest.fn();
  //   component = render(<Form onSubmit={onSubmit} />);
  //   const submit = component.getByTestId("input-submit");
  //   console.log(submit)
  //   fireEvent.click(submit);
  //   // console.log(onSubmit);
  //   expect(onSubmit).toHaveBeenCalled();
  // });

  test('submits username and password', () => { 
    const postCode3 = 'xxxxx';
    const postCode4 = 'yyyyy';
    const onSubmit = jest.fn();
    const { getByTestId, getByRole } = render(
      <Form onSubmit={onSubmit} />
    );  
    fireEvent.change(getByTestId("Enter your postcode"), {
      target: { value: postCode3}
    });  
    fireEvent.change(getByTestId("Enter your friend postcode"), {
      target: { value: postCode4 }
    });  
    fireEvent.click(getByTestId("input-submit", { value: "Find Locations" }));  
    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({
      postCode3,
      postCode4
    });
  });
  
})



