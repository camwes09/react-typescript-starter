//https://testing-library.com/docs/react-testing-library/intro
//Import Dependencies//
import * as React from 'react'
import { Hello, HelloProps } from './Hello'

// import react-testing methods
import { render, fireEvent, cleanup }  from 'react-testing-library'

// add custom jest matchers from jest-dom
//https://www.npmjs.com/package/jest-dom
import 'jest-dom/extend-expect'
//END Dependencies//

//Start test//

afterEach(cleanup); // automatically unmount and cleanup DOM after the test is finished.

test('should contain user greeting', () => {
    const {
        getByText, //will search for all elements that have a text node with textContent matching the given TextMatch
    } = render(<Hello firstName="First" lastName="Last"/>); //Render into a container which is appended to document.body

    getByText("Hello from First Last");
});
