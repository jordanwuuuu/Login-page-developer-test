import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';

export function DisplayContactDetailForAuth() {
  const storeContactDetail = ({ target }) => {
    localStorage.setItem('contactDetail', target.value);
  };

  return (
    <>
      <Header />
      <h1>Contact Details</h1>
      <h2 className="successMessage"> Match Found!</h2>
      <h3> Choose a contact detail for us to forward your one time code to</h3>
      <Link to="/enterAuthCode">
        <div className="featureContainer">
          <button
            className="contactDetailButton"
            value="+44 1234567890"
            onClick={storeContactDetail}
          >
            Mobile Number: +44 1234567890
          </button>
          <br />
          <button
            className="contactDetailButton"
            value="+01784 123456"
            onClick={storeContactDetail}
          >
            Landline Number: +01784 123456
          </button>
          <br />
          <button
            value="user@example.com"
            className="contactDetailButton"
            onClick={storeContactDetail}
          >
            Email Address: user@example.com
          </button>
        </div>
      </Link>
    </>
  );
}
