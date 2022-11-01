import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LOCALSTORAGE_KEY = 'contactDetail';

export function EnterAuthCode() {
  const correctAuthCode = '0000';
  const [authorised, setAuthorisedStatus] = useState(false);
  const [error, setError] = useState(false);

  const checkAuthCode = ({ target }) => {
    if (target.value === correctAuthCode) {
      setAuthorisedStatus(true);
    } else {
      setAuthorisedStatus(false);
    }
  };

  const checkAuthorisation = (prop) => {
    if (authorised) {
      setError(false);
    } else {
      setError(true);
      prop.preventDefault();
    }
  };

  return (
    <>
      <Header />
      <h1> Enter Authorisation Code</h1>
      <h2>Details sent to</h2>
      <h2 className='contactDetails'>
        {localStorage.getItem(LOCALSTORAGE_KEY)
          ? localStorage.getItem(LOCALSTORAGE_KEY)
          : 'chosen contact detail'}
      </h2>

      <div className="featureContainer">
        <Link to="/displayContactDetails">
          <button>Choose a different Contact detail</button>
        </Link>
        <br />
        <br />
        <input
          className="authCode"
          type="text"
          onChange={checkAuthCode}
          placeholder="Enter Code"
        ></input>
        {error ? (
          <p className="errorMessage"> Wrong authorisation code entered</p>
        ) : null}
        <br />
        <Link to="/welcome">
          <button aria-label="submitAuthCode" onClick={checkAuthorisation}>
            Submit{' '}
          </button>
        </Link>
        <br />
        <br />
      </div>
    </>
  );
}
