import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test("renders without errors", async () => {
    //Arrage
    render(<ContactForm/>);

    //Act:
    //  1. Get our species, age and notes input fields.
    // const speciesInput = screen.getByLabelText(/species/i);
    // const ageInput = screen.getByLabelText(/age/i);
    // const notesInput = screen.getByLabelText(/notes/i);

    //  2. Type values into our input fields.
    // userEvent.type(speciesInput, "Grizzly Bear");
    // userEvent.type(ageInput, "33");
    // userEvent.type(notesInput, "the cutest!!!!!!");

    //  3. Push the submit button.
    // const button = screen.getByRole('button');
    // userEvent.click(button);
    
    //Assert:
    // Species name is on the screen.
    // const newAnimal = await screen.findByText("Grizzly Bear");
    // expect(newAnimal).toBeInTheDocument();
});