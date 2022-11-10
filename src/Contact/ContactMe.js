import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../main/Header';
import '../css/contactMe.css';
import dltmdcks from '../image/dltmdcks.jpg';

const ContactMe = () => {
    return (
        <>
        <Header/>
        <div className='ContactMePage'>
            <div className='ContactMePage_sub'>
               <h1 className='ContactMe_title'>Contact Me</h1>
               <div className='ContactMe_contents'>
                    <div className='banner'>
                        <div className='txt_Name'>
                            <h1>MouseOver</h1>
                        </div>
                    </div>
               </div>
            </div>
        </div>
        </>
    );
};

export default ContactMe;