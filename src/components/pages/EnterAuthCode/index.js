import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';

export function EnterAuthCode() {
  return (
    <>
      <Header />
      <h1> Enter 4 Digit Authorisation Code</h1>
      <h2> Details sent to CLICKED STATE</h2>
      <h3>
        <Link to="/pickContactDetails">
          <button>Choose a different Contact detail?</button>
        </Link>
      </h3>

      <input className="authCode" type="number" max='9999'></input>
      <br />
      <Link to="/welcome">
        <button aria-label="submitAuthCode">Submit</button>
      </Link>
    </>
  );
}
