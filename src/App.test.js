import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm"

test("renders App without crashing", () => {
  //Arrange 
  render(<App />);



});
  // testing the testing test
  test("firstname, lastname, email, message inputs are rendered", () => {

    //Arrange
    const { getByLabelText } = render(<ContactForm  />)
    getByLabelText(/firstName/i)
  
    //Act

});


/*
    Create tests for 
      * First Name input
      * Last Name input 
      * Email input 
      * Message input
  *handleSubmit ?? 

*/ 
