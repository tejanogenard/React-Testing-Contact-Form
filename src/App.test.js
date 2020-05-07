import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
  render(<App />);
});


  // testing the testing test
  test("firstname, lastname, email, message inputs are rendered", () => {

    //Arrange
    const { getByLabelText,  getByTestId } = render(<ContactForm />)

    const firstName = getByLabelText(/first name*/i)
    
    
    // const id = getByTestId(/first name*/i)



    const lastName = getByLabelText(/last name*/i)
    const email = getByLabelText(/email*/i)
    const message = getByLabelText(/message/i)

    //Act

    // fireEvent.change(firstName, {
    // target: {value: "testing firstName input"}
    // })




    // fireEvent.change(lastName, {
    //   target: {value: "testing lastName input"}
    // })


});


/*
    Create tests for 
      * First Name input
      * Last Name input 
      * Email input 
      * Message input
  *handleSubmit ?? 

*/ 
