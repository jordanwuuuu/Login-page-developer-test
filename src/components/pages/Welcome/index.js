import './index.scss';
import { Header } from '../../Header';

export function WelcomePage() {
  return (
    <>
      <Header />
      <h1> Welcome!</h1>
      <h2 className='successMessage'>Successful login!</h2>
    </>
  );
}
