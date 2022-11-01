import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const ALPHANUMERIC_REGEX = /[^a-zA-Z0-9\s]/g;
const ALL_SPACES_REGEX = /\s/g;
const EMPTY_STRING = '';

export function LoginPage() {
  const [lastName, setLastName] = useState(EMPTY_STRING);
  const [lastNameError, setLastNameError] = useState(false);

  const [date, setDate] = useState();

  const [postCode, setPostCode] = useState(EMPTY_STRING);
  const [postCodeError, setPostCodeError] = useState(false);

  const emptyNameField =
    lastName?.replace(ALL_SPACES_REGEX, EMPTY_STRING) === EMPTY_STRING;

  const lastNameValidation = ({ target }) => {
    if (target.value.length === 0) {
      setLastName(target.value);
      setLastNameError(true);
    } else if (target.value.length < 50) {
      setLastName(target.value);
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const addressValidation = ({ target }) => {
    const postCodeLengthNoSpaces = target.value.replace(
      ALL_SPACES_REGEX,
      EMPTY_STRING,
    ).length;
    const nonAlphaNumericValues = target.value.match(ALPHANUMERIC_REGEX);

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
        <label htmlFor="lastName" className="featureContainer">
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
            <p className="errorMessage">
              Last Name must be under 50 characters
            </p>
          ) : null}
        </label>
        <br />
        <label htmlFor="dateOfBirth" className="featureContainer">
          Date Of Birth:
          <input
            type="date"
            name="dateOfBirth"
            className="dateOfBirth loginForm"
            max={setMaxDateToToday()}
            onChange={(prop) => setDate(prop.target.value)}
          />
        </label>

        <br />

        <label htmlFor="postCode" className="featureContainer">
          Post Code:
          <input
            type="text"
            name="postCode"
            className="postCode loginForm"
            onChange={addressValidation}
            value={postCode}
            placeholder="Postcode"
          />
          {postCodeError ? (
            <p className="errorMessage">
              Post Code must be between 5-7 alphanumeric characters only
            </p>
          ) : null}
        </label>

        <br />

        <label htmlFor="submitDetails" className="featureContainer">
          <Link to="/displayContactDetails">
            <button
              type="submit"
              value="fakeSubmit"
              className="submitButton loginForm"
              disabled={
                lastNameError ||
                postCodeError ||
                emptyNameField ||
                postCode === '' ||
                !date
              }
            >
              {' '}
              Submit Details
            </button>
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

  day = day < 10 ? '0' + day : day;
  month = month < 10 ? '0' + month : month;
  todaysDate = year + '-' + month + '-' + day;
  return todaysDate;
}
