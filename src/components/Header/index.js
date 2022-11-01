import './index.scss';
import drDoctorImage from '../../assets/images/drdoctor-company-logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export function Header() {
  return (
    <>
      <img
        src={drDoctorImage}
        alt="DrDoctor logo"
        className="drDoctorLogo"
      ></img>
      <Link to="/">
        <FontAwesomeIcon icon={faRightFromBracket} className="logOutIcon" />{' '}
      </Link>
    </>
  );
}
