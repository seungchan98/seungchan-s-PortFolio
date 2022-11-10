import React, {useState} from 'react';
import '../css/MBTIProject.css';
import MBTI_loginMainPage from '../image/MBTI_loginMainPage.jpeg';
import MBTI_AboutChar from '../image/MBTI_AboutChar.jpeg';
import MBTI_BoardPage from '../image/MBTI_BoardPage.jpeg';
import MBTI_ContactPage from '../image/MBTI_ContactPage.jpeg';
import MBTI_FindPassWord from '../image/MBTI_FindPassWord.jpeg';
import MBTI_MainPage from '../image/MBTI_MainPage.jpeg';
import MBTI_MyPage from '../image/MBTI_MyPage.jpeg';
import MBTI_ResultPage from '../image/MBTI_ResultPage.jpeg';
import MBTI_SingUpPage from '../image/MBTI_SignUpPage.jpeg';
import MBTI_TestPage from '../image/MBTI_TestPage.jpeg';
import MBTI_UpdateUser from '../image/MBTI_UpdateUser.jpeg';

const MBTIProject = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    var slides = document.getElementsByClassName('.MBTIProject_Image_Carousel');
    var slide = document.getElementsByClassName('MBTIProject_Carousel');
    //slide의 개수를 구할려면 slide.length로 바로사용
    var slideCount = document.getElementsByClassName('MBTIProject_Carousel').length;
    var [currentIdx, setCurrentIdx] = useState(0);

    const page = (num) => {
        document.querySelector('.MBTIProject_Image_Carousel').style.left = -num * 490 + 'px';
        currentIdx = num;//현재패이지가 누른페이지인지 알려주는것
    }
    
    const nextBtn = () => {//페이지 다음벝튼
        if(currentIdx < slide.length - 1){
            page(currentIdx + 1);
            console.log(currentIdx + 'page');
        }else {
            page(0);
        }
    }
    const prevBtn = () => {//페이지 이전버튼
        if(currentIdx > 0){
            page(currentIdx - 1);
            console.log(currentIdx + 'page');
        }else {
            page(slide.length -1);
        }
    }
    
    //addEventListener을 사용하려면 onClick을 사용하면 안된다 그냥 그 클래스명에다가 지정해주는거기 때문이다
    return (
        <div className='MBTIProject_Content'>
                    <div className='MBTIProject_SubContent'>
                        <div className='MBTIProject_ContentTitle'>MBTI(BWTH!)</div>
                        <div className='MBTIProject_SubContentTitle'>2022.08 ~ 2022.09<span>(6인프로젝트)</span></div>

                        <div className='MBTIProject_Show'>
                            <div className='MBTIProject_Image'>
                                <div className='MBTIProject_Image_Carousel'>{/*여기다가 transform */}
                                    <MBTI1></MBTI1>
                                    <MBTI2></MBTI2>
                                    <MBTI3></MBTI3>
                                    <MBTI4></MBTI4>
                                    <MBTI5></MBTI5>
                                    <MBTI6></MBTI6>
                                    <MBTI7></MBTI7>
                                    <MBTI8></MBTI8>
                                    <MBTI9></MBTI9>
                                    <MBTI10></MBTI10>
                                    <MBTI11></MBTI11>
                                </div>
                                <nav className='MBTIPageCount'>
                                    <div className='MBTIPageCount_Sub'>
                                        <button className='btn1' onClick={prevBtn}>
                                            prev
                                        </button>
                                        <button className='btn2' onClick={nextBtn}>
                                            next
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            
                            
                            <div className='MBTIProject_Explain'>
                                <div className='MBTIProject_descriptions'>
                                    <b>나의 성격이 어떤 유형인지 검사하고, 검사를 토대로 게시판에 기능을 넣어 글을쓰며 공유가능한 웹사이트 입니다.</b>
                                    요즘 유행하는 MBTI사이트에서 아이디어를 바탕으로 개발하였습니다.<br/><br/>
                                    첫번째 프로젝트가 끝나고 바로 두번째 프로젝트를 시작하였으며, 첫번째 프로젝트하는 동안 배운 React, MySQL을 사용해보았습니다.
                                    짧게 배운 React를 프로젝트하면서 어려움도 많았지만, 배운것을 토대로 많은 기술들을 써볼수 있는 계기가 된 프로젝트였습니다.   
                                </div>
                                <div className='MBTIProject_Inner_descriptions'>
                                    <div className='MBTIProject_Label'>
                                        주요기능
                                    </div>
                                    <div className='MBTIProject_Value'>
                                        - 성격유형 검사.<br/>
                                        - 커뮤니티로 성격유형검사에 대한 글쓰기.<br/>
                                        - 성격유형에 대한 설명보기.<br/>
                                    </div>
                                </div>
                                <div className='MBTIProject_Inner_descriptions'>
                                    <div className='MBTIProject_Label'>
                                        나의 역활
                                    </div>
                                    <div className='MBTIProject_Value'>
                                        - ContactPage UI 개발.<br/>
                                        - 로그인 페이지 UI 개발.<br/>
                                        - 로그인 기능 구현.<br/>
                                        - 비밀번호 찾기 기능 구현.<br/>
                                    </div>
                                </div>
                                <div className='MBTIProject_Inner_descriptions'>
                                    <div className='MBTIProject_Label'>
                                     Frontend
                                    </div>
                                    <div className='MBTIProject_Value'>
                                        HTML, CSS, JavaScript, React, Node.js
                                    </div>
                                </div>
                                <div className='MBTIProject_Inner_descriptions'>
                                    <div className='MBTIProject_Label'>
                                        Backend
                                    </div>
                                    <div className='MBTIProject_Value'>
                                        Spring Boot
                                    </div>
                                </div>
                                <div className='MBTIProject_Inner_descriptions'>
                                    <div className='MBTIProject_Label'>
                                     Database
                                    </div>
                                    <div className='MBTIProject_Value'>
                                        MySQL
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
    );
};

function MBTI1 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_loginMainPage} alt='MBTI_loginMainPage'/>
        </div>
    )
}
function MBTI2 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_FindPassWord} alt='MBTI_AboutChar'/>
        </div>
    )
}
function MBTI3 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_MainPage} alt='MBTI_BoardPage'/>
        </div>
    )
}
function MBTI4 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_SingUpPage} alt='MBTI_ContactPage'/>
        </div>
    )
}
function MBTI5 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_MyPage} alt='MBTI_FindPassWord'/>
        </div>
    )
}
function MBTI6 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_UpdateUser} alt='MBTI_MainPage'/>
        </div>
    )
}
function MBTI7 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_TestPage} alt='MBTI_MyPage'/>
        </div>
    )
}
function MBTI8 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_ResultPage} alt='MBTI_ResultPage'/>
        </div>
    )
}
function MBTI9 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_AboutChar} alt='MBTI_SingUpPage'/>
        </div>
    )
}
function MBTI10 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_BoardPage} alt='MBTI_TestPage'/>
        </div>
    )
}
function MBTI11 () {
    return (
        <div className='MBTIProject_Carousel'>
            <img className='MBTIProjectImage-Show' src={MBTI_ContactPage} alt='MBTI_UpdateUser'/>
        </div>
    )
}
export default MBTIProject;