import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/mainContent.css'
// import AboutMe from '../AboutMePage/AboutMe';
// import styled from 'styled-components';
const MainContent = () => {
    // const toggle = document.querySelector('.toggleSwitch');

    // const toggle1 = () => {
    //     toggle.classList.toggle('active');
    //   }
    const [toggleSwitch, setToggleSwitch] = useState(false);
    const toggleMenu = () => {
        setToggleSwitch(toggleSwitch => !toggleSwitch);
    }  
    return (
        <div className={toggleSwitch ? 'mainContent' : 'mainContentt'}>   
            <Link to='/AboutMe' className='mainContentBtn'>
                <span>Click Me</span>
                <svg width='13px' height='10px' viewBox='0 0 13 10'>
                    <path d='M1,5 L11,5'></path>
                    <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
            </Link>
            <div>
                <input type="checkbox" className='toggle' id="toggle" hidden /> 
                <label htmlFor='toggle' className='toggleSwitch' onClick={() => toggleMenu()}>
                    <span className="toggleButton"></span>
                </label>
            </div>
        </div>
    );
};

export default MainContent; 
 