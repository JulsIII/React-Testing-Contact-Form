import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test("renders form without errors", async () => {
    //Arrage
    render(<ContactForm/>);

    //Act:
    //  1. Get our input fields.
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const msgInput = screen.getByLabelText(/message/i);

    //  2. Type values into our input fields.
    userEvent.type(fNameInput, "Bob");
    userEvent.type(lNameInput, "Bobblin");
    userEvent.type(emailInput, "bob@bobs.com");
    userEvent.type(msgInput, "Bob Bobblin approves of the message!");

    //  3. Push the submit button.
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    //Assert:
    // Info is on the screen.
    const newfName = await screen.findByDisplayValue("Bob");
    const newlName = await screen.findByDisplayValue("Bobblin"); 
    const newEmail = await screen.findByDisplayValue("bob@bobs.com");  
    const newMsg = await screen.findByDisplayValue("Bob Bobblin approves of the message!");
    expect(newfName).toBeInTheDocument();
    expect(newlName).toBeInTheDocument();
    expect(newEmail).toBeInTheDocument();
    expect(newMsg).toBeInTheDocument();
});