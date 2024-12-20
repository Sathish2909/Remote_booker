import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed,faCar,faTaxi,faPlane, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Renatals</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Taxi</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Planes</span>
            </div>
            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />
                <span>Attractions</span>
            </div>
            
        </div>
        <h1 className="headerTitle">Always welcomes you!!</h1>
        <p className="headerDesc">Book all your needs with just one click</p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='header-icon'/>
                <input type="text" placeholder='where are you going'
                className='headerSearchINput' />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays } className='header-icon'/>
                <span className='headerSearchText'> date to date</span>
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='header-icon'/>
                <span className='headerSearchText'>2 adults 1 children</span>
                
            </div>
        </div>
    </div>
  )
}

export default Header;