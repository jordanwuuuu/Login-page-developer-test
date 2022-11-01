import './index.scss';
import { Header } from '../../Header';

export function WelcomePage() {
  return (
    <>
      <Header />
      <h1> Welcome!</h1>
      <div className="featureContainer">
      <h2 className="successMessage">Successful login!</h2>
      </div>
        <img
          src="https://workablehr.s3.amazonaws.com/uploads/photos/171252/95ff249eb8ddb30cdc062f1ad0b9c374.jpg"
          alt="welcomeImage" className='welcomeImage'
        ></img>
    </>
  );
}
