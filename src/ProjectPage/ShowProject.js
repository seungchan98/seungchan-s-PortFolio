import React from 'react';
import Header from '../main/Header';
import MBTIProject from './MBTIProject';
import KreamProject from './KreamProject';
import PortFolioProject from './PortFolioProject';
import IphoneTodoList from './IphoneTodoList';
import '../css/showProject.css';

const ShowProject = () => {
    
    return (
        <div className='real_Main'>
        <Header/>
        <div className='showProjectStart'>
            <div className='Project_Page'>
                <div className='Project_Title'>
                    <div className='Project_SubTitle' >PROJECT</div>
                </div>
                <MBTIProject/>
                <KreamProject/>
                <PortFolioProject/>
                <IphoneTodoList/>
            </div>    
        </div>
        </div>
    );
};
export default ShowProject;