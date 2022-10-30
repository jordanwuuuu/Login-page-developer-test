import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export function LoginPage() {
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);

  const [date, setDate] = useState();

  const [postCode, setPostCode] = useState('');
  const [postCodeError, setPostCodeError] = useState(false);

  let lastNameValidation = ({ target }) => {
    if (target.value.length < 50) {
      setLastName(target.value);
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
    // target.value.length < 50
    //   ? setLastName(target.value) && setLastNameError(false)
    //   : setLastNameError(true);
    //TODO: check why backspace removes 2 from length rather than 1
    // TODO: Why shorthand above doesn't re-run the error check
  };

  let addressValidation = ({ target }) => {
    const postCodeLengthNoSpaces = target.value.replace(/\s/g, '').length;
    const nonAlphaNumericValues = target.value.match(/[^a-zA-Z0-9\s]/g);

    if (!nonAlphaNumericValues && postCodeLengthNoSpaces < 5) {
      setPostCode(target.value);
      setPostCodeError(true);
    } else if (!nonAlphaNumericValues && postCodeLengthNoSpaces <= 7) {
      setPostCode(target.value);
      setPostCodeError(false);
    } else {
      setPostCodeError(true);
    }
  };

  return (
    <>
      <Header />
      <h1> Please enter your details below:</h1>
      <form>
        <label htmlFor="lastName" className='featureContainer'>
          Last Name: 
          <input
            type="text"
            name="lastName"
            className="lastName loginForm"
            onChange={lastNameValidation}
            value={lastName}
            placeholder="Last Name"
            />
          {lastNameError ? (
            <p className="errorMessage">Last Name must be under 50 characters</p>
            ) : null}

        </label>
        <br />
        <label htmlFor="dateOfBirth" className='featureContainer'>
          Date Of Birth: 
          <input
            type="date"
            name="dateOfBirth"
            className="dateOfBirth loginForm"
            max={setMaxDateToToday()}
            onChange={(prop) => setDate(prop.target.value)}
          ></input>
        </label>

        <br />

        <label htmlFor="postCode" className='featureContainer'>
          Post Code: 
          <input
            type="text"
            name="postCode"
            className="postCode loginForm"
            onChange={addressValidation}
            value={postCode}
            placeholder="Postcode"
          ></input>
          {postCodeError ? (
            <p className="errorMessage">
              Post Code must be between 5-7 alphanumeric characters only
            </p>
          ) : null}
        </label>

        <br />

        <label htmlFor="submitDetails" className='featureContainer'>
          <Link to="/displayContactDetails">
            <button
              type="submit"
              value="fakeSubmit"
              className="submitButton loginForm"
              disabled={
                lastNameError ||
                postCodeError ||
                lastName.replace(/\s/g, '') === '' ||
                postCode === '' ||
                !date
              }
            >
              {' '}
              Submit Details
            </button>
            {/* would normally hit the server / API to get a response */}
            {/* <input type='submit' value='submit'></input> */}
          </Link>
        </label>
      </form>
    </>
  );
}

function setMaxDateToToday() {
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1;
  const year = todaysDate.getFullYear();
  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
  }
  todaysDate = year + '-' + month + '-' + day;
  return todaysDate;
}
