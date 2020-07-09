import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ReactDOM from 'react-dom';
import UserForm from "./UserForm";
import LandingPage from '../landing-page/LandingPage'
import App from '../../App'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<UserForm/>, div);
  });

it('UserForm returns null', () => {
    const { baseElement } = render(<UserForm />)
    console.log(baseElement)
    expect(baseElement).not.toContain(/I am the user form/i);
})

it("Userform is returned when state is set to form", () => {
  const { getByText } = render(<App />)
  const button = getByText("next page")
  fireEvent.click(button)
  const linkElement = getByText(/I am the user form/i)
  expect(linkElement).toBeInTheDocument()
})
