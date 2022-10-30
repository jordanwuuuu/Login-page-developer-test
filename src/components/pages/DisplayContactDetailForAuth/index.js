import './index.scss';
import { Header } from '../../Header';
import { Link } from 'react-router-dom';

export function DisplayContactDetailForAuth() {
  // const [contactDetailLink, setContactDetailLink] = useState('/enterAuthCode');

  // let createLinkPath = (chosenContactDetail) => {
  //   switch (chosenContactDetail) {
  //     case 'mobile':
  //       setContactDetailLink('/enterAuthCode#mobile');
  //       break;
  //     case 'landLine':
  //       setContactDetailLink('/enterAuthCode#landline');
  //       break;
  //     case 'email':
  //       setContactDetailLink('/enterAuthCode#email');
  //       break;
  //     default:
  //       setContactDetailLink('/enterAuthCode');
  //   }
  //   console.log('>> Set to:', chosenContactDetail);
  // };
  const storeContactDetail = ({ target }) => {
    localStorage.setItem('contactDetail', target.value);
  };

  return (
    <>
      <Header />
      <h1>Contact Details</h1>
      <h2 className="successMessage"> Match Found!</h2>
      <h3> Choose a contact detail for us to forward your one time code to</h3>
      {/* Pull into own components? */}
      <Link to="/enterAuthCode">
        {/* //"/enterAuthCode"> */}
        <button value="+44 1234567890" onClick={storeContactDetail}>
          Mobile Number: +44 1234567890
        </button>
        <br />
        <button value="+01784 123456" onClick={storeContactDetail}>
          Landline Number: +01784 123456
        </button>
        <br />
        <button value="user@example.com" onClick={storeContactDetail}>
          Email Address: user@example.com
        </button>
      </Link>
    </>
  );
}
