import { Header } from '../../Header';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <>
      <Header />
      <h1>Log in page</h1>
      <h2> Please enter your details below:</h2>
      <form>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastName"></input>
        </label>
        <br />
        <label htmlFor="dateOfBirth">
          Date Of Birth
          <input type="date" name="dateOfBirth" className="datePicker" max={setMaxDateToToday()}></input>
        </label>
        <br />
        <label htmlFor="postCode">
          Post Code:
          <input type="text" name="postCode"></input>
        </label>
        <br />
        <label htmlFor="submitDetails">
          <Link to="/pickContactDetails">
            <button type="submit" value="fakeSubmit">
              {' '}
              Submit Details
            </button>
            {/* would normally hit the server / API to get a response */}
            {/* <input type="submit" value="submit"></input> */}
          </Link>
        </label>
      </form>
    </>
  );
}

function setMaxDateToToday() {
  let todaysDate = new Date();
  let day = todaysDate.getDate();
  let month = todaysDate.getMonth() + 1; //January is 0!
  const year = todaysDate.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

  todaysDate = year + '-' + month + '-' + day;
  console.log('> Todays date', todaysDate);
  return todaysDate

}