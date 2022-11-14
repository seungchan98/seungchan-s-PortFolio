import React, { useEffect, useState } from 'react';
import '../css/header.css';
import { Link, NavLink } from 'react-router-dom';
import Seungchan from '../image/dltmdcks.jpg';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        console.log(scrollPosition);
        window.addEventListener('scroll', updateScroll);
    }, [])


    return (
        <div className={scrollPosition < 50 ? 'Header' : 'Header_Change'}> {/*스크롤이 숫자px 이상일때 변환되도록*/}
            <div className='HeaderSub'>
                    <div className='Header-logo'>
                        <span className='Header-Span-content'>
                            <img className='leeseungchan' src={Seungchan} alt='leeseungchan'/>
                            <Link to='/' className='Header-Myname'>SeungChan Lee</Link>
                        </span>
                    </div>

                    <div className='Header-menu'>
                        <NavLink to='/' className='Header-list' end>
                            {/* end를 넣지 않으면 '/'이게 다 들어가있으므로 활성화가 되기때문에 end를 붙히면 안된다 */}
                            Home
                        </NavLink>
                        <NavLink to='/ShowProject' className='Header-list'>
                            Project
                        </NavLink>

                        <NavLink to='/Notes' className='Header-list'>
                            Notes
                        </NavLink>

                        <NavLink to='/AboutMe' className='Header-list'>
                            About Me
                        </NavLink>

                        {/* <NavLink to='www.naver.com' className='Header-list'>
                            Contact Me
                        </NavLink> */}
                    </div>
            </div>
        </div>
    );
};

export default Header;