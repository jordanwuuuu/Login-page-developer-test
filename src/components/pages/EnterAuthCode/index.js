import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function EnterAuthCode() {
  const [authorised, setAuthorisedStatus] = useState(false);
  const [error, setError] = useState(false);

  let checkAuthCode = ({ target }) => {
    if (target.value === '0000') {
      setAuthorisedStatus(true);
    } else {
      setAuthorisedStatus(false);
    }
  };

  const checkAuthorisation = (e) => {
    if (authorised) {
      setError(false);
    } else {
      setError(true);
      e.preventDefault();
    }
  };
  return (
    <>
      <Header />
      <h1> Enter Authorisation Code</h1>
      <h2>
        {' '}
        Details sent to{' '}
        {localStorage.getItem('contactDetail')
          ? localStorage.getItem('contactDetail')
          : 'chosen contact detail'}
      </h2>
      <div className="featureContainer">
        <h3>
          <Link to="/displayContactDetails">
            <button>Choose a different Contact detail</button>
          </Link>
        </h3>

        <input
          className="authCode"
          type="text"
          onChange={checkAuthCode}
          placeholder="Enter Authorisation Code"
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
      </div>
    </>
  );
}
