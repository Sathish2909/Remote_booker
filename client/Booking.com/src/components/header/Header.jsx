import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed,faCar,faTaxi,faPlane, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons";
import {DateRange} from 'react-date-range';
import React,{ useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import  {format} from "date-fns";

const Header = () => {
  const [openDate,setOpenDate]=useState(false)
  const [date,setDate]=useState([
    {
        startDate :new Date(),
        endDate :new Date(),
        key:'selection'
    }
  ]);
  const [openOptions,setopenOptions]=useState(false);
  const [options,setOptions]=useState(
    {
        adult:1,
        children:0,
        room :1,
    }
  );
  return (
    <div className="header">
        <div className="headerContainer">
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
        </div>
        <h1 className="headerTitle">Always welcomes you!!</h1>
        <p className="headerDesc">Book all your needs with just one click</p>
        <button className="headerBtn">Sign in/Register</button>
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='header-icon'/>
                <input type="text" placeholder='where are you going'
                className='headerSearchInput' />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays } className='header-icon'/>
                <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'> {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                { openDate && <DateRange
                editableDateInputs={true}
                onChange={item=>setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
                />}
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className='header-icon'/>
                <span className='headerSearchText'>{`${options.adult}adult  ${options.children}children  ${options.room}room `}</span>
                    <div className="options">
                        <div className="optionItem">
                            <span className="optionText">Adult</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">-</button>

                        </div>
                        <div className="optionItem">
                            <span className="optionText">Children</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">0</span>
                            <button className="optionCounterButton">-</button>

                        </div>
                        <div className="optionItem">
                            <span className="optionText">Room</span>
                            <button className="optionCounterButton">-</button>
                            <span className="optionCounterNumber">1</span>
                            <button className="optionCounterButton">-</button>

                        </div>
                    </div>
            </div>
            <div className="headerSearchItem">
                 <button className="headerBtn">Search</button>
                
            </div>
        </div>
    </div>
  )
}

export default Header;