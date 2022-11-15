import React, { useState, useEffect} from 'react';
import '../css/content.css';
// import Header from './Header';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';

const Content = () => {
    const [blogTitle, setBlogTitle] = useState('');
    const [count, setCount] = useState(0);
    const completionWord = '안녕하세요. 개발자를 꿈꾸는 이승찬입니다.';

    useEffect(() => {
      const typingInterval = setInterval(() => {
        setBlogTitle((prevTitleValue) => {
          let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
          setCount(count + 1);
  
          if (count >= completionWord.length) {
              setCount(0);
              setBlogTitle('');
          }
  
          return result;
        });
      }, 100);
  
      return () => {
        clearInterval(typingInterval);
      };
    });
    
    return (
      <div className='MainContent'>
          <div className='MainContent_Sub'>
              <div className='MainContent-Title'>
                  <span className='myName'>{blogTitle}</span>
                  <span className='hello-emoji'>👋</span>
                  <div className='MainContent-SubTitle'>
                    <span>H</span>
                    <span>e</span>
                    <span>r</span>
                    <span>e</span>
                    <span>'</span>
                    <span>s</span>
                    <span>M</span>
                    <span>a</span>
                    <span>i</span>
                    <span>n</span>
                  {/* Here's PortFolio Main Page! */}
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Content;