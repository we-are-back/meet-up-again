import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import ReactDOM from "react-dom";
import UserForm from "./UserForm";
import App from "../../App";
import Form from "../userForm/Form";
import axiosMock from "axios";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserForm />, div);
});

// it('UserForm returns null', () => {
//     const { baseElement } = render(<UserForm />)
//     console.log(baseElement)
//     expect(baseElement).not.toContain(/I am the user form/i);
// })


afterEach(cleanup);

describe("Test user form", () => {
  let component;
  const onSubmit = jest.fn();

  beforeEach(() => {
    component = render(<App onClick={onSubmit} />);
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

});

// describe("", () => {
//   let component;

//   // if both input field have a postcode and user press the button
//   it("Button click runs a function that takes two input fields as arguments", async () => {
//     let postcodeOne;
//     let postcodeTwo;
//     const submitHandler = jest.fn();
//     const { getByTestId } = render(<Form onChange={submitHandler} />);
//     const submitButton = getByTestId("input-submit");
//     fireEvent.click(submitButton);
//     // console.log(onSubmit);
//     await waitFor({
//       "postcodes": [postcodeOne, postcodeTwo]
//     }
//     )
//     // expect(onSubmit).toHaveBeenCalled();
//     // const header = getByText(/List of locations/i);
//     // expect(header).toBeInTheDocument();
//     expect(submitHandler).toHaveBeenCalled();
//   });

  test('change values via the fireEvent.change method', () => {
    const handleChange = jest.fn()
    const { container } = render(<input type="text" onChange={handleChange} />)
    const input = container.firstChild;
    fireEvent.change(input, { target: { value: 'a' } })
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(input.value).toBe('a')
  })

  test('select drop-downs must use the fireEvent.change', () => {
    const handleChange = jest.fn()
    const { container } = render(
      <select onChange={handleChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
    )
    const select = container.firstChild
    console.log(select)
    const option1 = container.getElementsByTagName('option').item(0)
    const option2 = container.getElementsByTagName('option').item(1)

    fireEvent.change(select, { target: { value: '2' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(option1.selected).toBe(false)
    expect(option2.selected).toBe(true)
  })





  // test('submits username and password', () => {
  //   const postCode3 = 'xxxxx';
  //   const postCode4 = 'yyyyy';
  //   const onClick = jest.fn();
  //   const { getByTestId, getByRole } = render(
  //     <Form onSubmit={onClick} />
  //   );
  //   fireEvent.change(getByTestId("Enter your postcode"), {
  //     target: { value: postCode3 }
  //   });
  //   fireEvent.change(getByTestId("Enter your friend postcode"), {
  //     target: { value: postCode4 }
  //   });
  //   fireEvent.click(getByRole("button", { name: /click/i }));
  //   // expect(onClick).toHaveBeenCalledTimes(1);
  //   expect(onClick).toHaveBeenCalledWith({
  //     postCode3,
  //     postCode4
  //   });
  // });

// })



