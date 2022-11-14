import React from 'react';
import { Link} from 'react-router-dom';
import '../css/sideBarUl.css';

const SideBarUl = () => {
    
    return (
        <div className='sideBarContent'>
            <Link to='/JavaNotes' className='sideBarContentLink'>
                <span className='sideBarContent_inner1'>Java</span>
                Java
            </Link>
            <Link to='/SpringNotes' className='sideBarContentLink'>
                <span className='sideBarContent_inner1'>Java</span>
                Spring
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner1'>Java</span>
                Spring Boot
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner1'>Java</span>
                Eclipse
            </Link>
            <Link to='/ReactNotes' className='sideBarContentLink'>
                <span className='sideBarContent_inner2'>Front-end</span>
                React
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner2'>Front-end</span>
                Jsp
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner2'>Front-end</span>
                JavaScript
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner2'>Front-end</span>
                HTML
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner2'>Front-end</span>
                CSS
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner3'>Back-end</span>
                Oracle
            </Link>
            <Link className='sideBarContentLink'>
                <span className='sideBarContent_inner3'>Back-end</span>
                MySQL
            </Link>
            <Link to='/GitHubNotes'className='sideBarContentLink'>
                <span className='sideBarContent_inner4'>GitHub</span>
                Git
            </Link>
        </div>
    );
};

export default SideBarUl;