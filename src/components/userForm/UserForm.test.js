import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ReactDOM from "react-dom";
import UserForm from "./UserForm";
import App from '../../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserForm />, div);
});

// it('UserForm returns null', () => {
//     const { baseElement } = render(<UserForm />)
//     console.log(baseElement)
//     expect(baseElement).not.toContain(/I am the user form/i);
// })

describe("Test user form", () => {
  let component;

  beforeEach(() => {
    component = render(<App />);
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

  //if both input field have a postcode and user press the button 
  // it("Submits empty postcode fields", () => {
  //   const onSubmit = jest.fn();
  //   const { getByTestId } = component;
  //   const button = getByTestId("form-submit")
  //   fireEvent.submit(button)
  //   expect(onSubmit).toHaveBeenCalledTimes(1);
  // })


  afterEach(cleanup);
});

