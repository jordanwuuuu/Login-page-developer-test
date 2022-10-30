import './index.scss';
import { Header } from '../../Header';
import { Link} from 'react-router-dom';

export function DisplayContactDetailForAuth() {
  return (
    <>
      <Header />
      <h1>Contact Details</h1>
      <h2 className='successMessage'> Match Found!</h2>
      <h3> Choose a contact detail for us to forward your one time code to</h3>
      {/* Pull into own components? */}
      <Link to='/enterAuthCode'>

      <button>Mobile Number: +44 1234444444</button>
      <br />
      <button>Landline Number: +44 1234444444</button>
      <br />
      <button>Email Address: user@example.com</button>
      </Link>
    </>
  );
}
