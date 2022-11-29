import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../css/notes.css';
import Header from '../main/Header';
import SideBarUl from './SideBarUl';

const Notes = () => {
    const [visible, setVisible] = useState(false);
    // const [count, setCount] = useState(11);
    const count = 11;

    const toggleSideBar = () => {
        setVisible(visible => !visible);//on,off 개념 boolean
    }

    return (
        <div className='real_Main'>
            <Header/>
            <div className='NotesPageStart'>
                <div className={visible ? 'NotesPageSideBarHide' : 'NotesPageSideBarShow'}>
                    <SideBarUl></SideBarUl>
                    <button className={visible ? 'sideBarHiddenBtn' : 'sideBarShowBtn'} onClick={() => toggleSideBar()}> {/*클릭시 이벤트 발생*/}
                        {}
                    </button>
                </div>
                
                <div className={visible ? 'NotesPageContentWide' : 'NotesPageContent'}>
                    <h2 className='NotesPageContentH2'>
                            Notes
                        <p className='NotesPageContentPTag'>
                            Count : {count}
                        </p>
                    </h2>
                    <div className='NotesPageContentSub'>
                            <Link to='/JavaNotes' className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front1'>
                                        <span className='NotesContents_frontIn'>Java</span>
                                    </div>
                                    <p className='NotesContents_text'>Java</p>
                                </div>
                            </Link>
                            <Link to='/SpringNotes' className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front1'>
                                        <span className='NotesContents_frontIn'>Java</span>
                                    </div>
                                    <p className='NotesContents_text'>Spring</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front1'>
                                        <span className='NotesContents_frontIn'>Java</span>
                                    </div>
                                    <p className='NotesContents_text'>Spring Boot</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front1'>
                                        <span className='NotesContents_frontIn'>Java</span>
                                    </div>
                                    <p className='NotesContents_text'>Eclipse</p>
                                </div>
                            </Link>
                            <Link to='/ReactNotes' className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front2'>
                                        <span className='NotesContents_frontIn'>Front-end</span>
                                    </div>
                                    <p className='NotesContents_text'>React</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front2'>
                                        <span className='NotesContents_frontIn'>Front-end</span>
                                    </div>
                                    <p className='NotesContents_text'>Jsp</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front2'>
                                        <span className='NotesContents_frontIn'>Front-end</span>
                                    </div>
                                    <p className='NotesContents_text'>JavaScript</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front2'>
                                        <span className='NotesContents_frontIn'>Front-end</span>
                                    </div>
                                    <p className='NotesContents_text'>HTML</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front2'>
                                        <span className='NotesContents_frontIn'>Front-end</span>
                                    </div>
                                    <p className='NotesContents_text'>CSS</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front3'>
                                        <span className='NotesContents_frontIn'>Back-end</span>
                                    </div>
                                    <p className='NotesContents_text'>Oracle</p>
                                </div>
                            </Link>
                            <Link className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front3'>
                                        <span className='NotesContents_frontIn'>Back-end</span>
                                    </div>
                                    <p className='NotesContents_text'>MySQL</p>
                                </div>
                            </Link>
                            <Link to='/GitHubNotes' className='NotesContents'>
                                <div className='NotesContents_sub'>
                                    <div className='NotesContents_front4'>
                                        <span className='NotesContents_frontIn'>GitHub</span>
                                    </div>
                                    <p className='NotesContents_text'>git</p>
                                </div>
                            </Link>
                    </div>
                </div>
                <p className='justPtag'>Copyright 2022. LSC. All rights reserved</p>
            </div>
    </div>
    );
};

export default Notes;