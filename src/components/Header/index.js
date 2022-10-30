import './index.scss'
import drDoctorImage from '../../assets/images/drdoctor-company-logo.svg';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <>
        <img src={drDoctorImage} alt="DrDoctor logo"></img>
      <Link to="/">
        Log Out
      </Link>
    </>
  );
}
