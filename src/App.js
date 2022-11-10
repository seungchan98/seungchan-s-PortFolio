import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './main/Header';
import Main from './main/Main';
import AboutMe from './AboutMePage/AboutMe';
import ShowProject from './ProjectPage/ShowProject';
import Notes from './sideBar/Notes';
import AnimationCursor from './mouseCursor/AnimationCursor';
import MainContent from './main/MainContent';
import Content from './main/Content';
import Content2 from './main/Content2';
import MenuBar from './menuBar/MenuBar';
import SpringNotes from './sideBar/SpringNotes';
import SideBarUl from './sideBar/SideBarUl';
import Dropdown from './menuBar/Dropdown';
import ContactMe from './Contact/ContactMe';
import GitHubNotes from './sideBar/GitHubNotes';
import JavaNotes from './sideBar/JavaNotes';
import MultipleSlider from './Slider/MultipleSlider';
import Footer from './main/Footer';
import MBTIProject from './ProjectPage/MBTIProject';
import KreamProject from './ProjectPage/KreamProject';
import PortFolioProject from './ProjectPage/PortFolioProject';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'/>
        {/* <Route path="/" index element={<Main/>}/> */}
        {/* <Route path='/' component={Main}/> */}
         <Route index element={<Main/>}/>
        <Route exact path='/AboutMe' element={<AboutMe/>}/>
        <Route exact path='/ShowProject' element={<ShowProject/>}/>
        <Route exact path='/Notes' element={<Notes/>}/>
        <Route exact path='/Header' element={<Header/>}/>
        <Route exact path='/AnimationCursor' element={<AnimationCursor/>}/>
        <Route exact path='/Content' element={<Content/>}/>
        <Route exact path='/Content2' element={<Content2/>}/>
        <Route exact path='/MainContent' element={<MainContent/>}/>
        <Route exact path='/MenuBar' element={<MenuBar/>}/>
        <Route exact path='/SpringNotes' element={<SpringNotes/>}/>
        <Route exact path='/GitHubNotes' element={<GitHubNotes/>}/>
        <Route exact path='/JavaNotes' element={<JavaNotes/>}/>
        <Route exact path='/SideBarUl' element={<SideBarUl/>}/>
        <Route exact path='/Dropdown' element={<Dropdown/>}/>
        <Route exact path='/ContactMe' element={<ContactMe/>}/>
        <Route exact path='/MultipleSlider' element={<MultipleSlider/>}/>
        <Route exact path='/Footer' element={<Footer/>}/>
        <Route exact path='/MBTIProject' element={<MBTIProject/>}/>
        <Route exact path='/KreamProject' element={<KreamProject/>}/>
        <Route exact path='/PortFolioProject' element={<PortFolioProject/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;