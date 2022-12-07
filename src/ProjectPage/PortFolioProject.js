import React, {useState} from 'react';
import '../css/PortFolioProject.css';
import Portfolio_MainPage from '../image/Portfolio_MainPage.png';
import Portfolio_aboutMe from '../image/Portfolio_aboutMe.png';
import Portfolio_notesClose from '../image/Portfolio_notesClose.png';
import Portfolio_notesCloseSub from '../image/Portfolio_notesCloseSub.png';
import Portfolio_notesPage from '../image/Portfolio_notesPage.png';
import Portfolio_notesSub from '../image/Portfolio_notesSub.png';
import Portfolio_projectPage from '../image/Portfolio_projectPage.png';
const PortFolioProject = () => {
    // const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // var slides = document.getElementsByClassName('.PortFolioProject_Image_Carousel');
    var slide = document.getElementsByClassName('PortFolioProject_Carousel');
    //slide의 개수를 구할려면 slide.length로 바로사용
    // var slideCount = document.getElementsByClassName('PortFolioProject_Carousel').length;
    // var [currentIdx, setCurrentIdx] = useState(0);
    var currentIdx = 0;
    const git_PortFolio = 'https://github.com/seungchan98/seungchan-s-PortFolio';
    const portFolio_Netlify = 'https://lscpofol.netlify.app/'
    const page = (num) => {
        document.querySelector('.PortFolioProject_Image_Carousel').style.left = -num * 490 + 'px';
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
    return (
        <div className='PortFolioProject_Content'>
                    <div className='PortFolioProject_SubContent'>
                        <div className='PortFolioProject_ContentTitle'>Portfolio</div>
                        <div className='PortFolioProject_SubContentTitle'>2022.10 ~ <span>(개인 프로젝트)</span></div>

                        <div className='PortFolioProject_Show'>
                            <div className='PortFolioProject_Image'>
                                <div className='PortFolioProject_Image_Carousel'>{/*여기다가 transform */}
                                    <PortFolio1/>
                                    <PortFolio2/>
                                    <PortFolio3/>
                                    <PortFolio4/>
                                    <PortFolio5/>
                                    <PortFolio6/>
                                    <PortFolio7/>
                                </div>
                                <nav className='PortFolioPageCount'>
                                    <div className='PortFolioPageCount_Sub'>
                                        <button className='btn1' onClick={prevBtn}>
                                            prev
                                        </button>
                                        <button className='btn2' onClick={nextBtn}>
                                            next
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            
                            
                            <div className='PortFolioProject_Explain'>
                                <div className='PortFolioProject_descriptions'>
                                    <b>포트폴리오 용도로 제작하였습니다.</b>
                                    페이지는 JavaScript, React를 활용해서 제작하였습니다.<br/><br/>
                                    포토폴리오를 준비하면서 지금까지 공부했던것들을 정리하면서 써보지못한 기능구현들을 해볼려고 노력했습니다.
                                    만들면서 많이 부족한점을 느꼈고 웹에 엄청 다양한 기능구현들을 찾아보면서 흥미와 재미를 찾았습니다.
                                </div>
                                <div className='PortFolioProject_Inner_descriptions'>
                                    <div className='PortFolioProject_Label'>
                                        주요기능
                                    </div>
                                    <div className='PortFolioProject_Value'>
                                        - 간단한 자기소개.<br/>
                                        - 프로젝트 경험.<br/>
                                        - 배운내용 정리.<br/>
                                        - 기술 스택.<br/>
                                        - 나의 연락처.<br/>
                                    </div>
                                </div>
                                <div className='PortFolioProject_Inner_descriptions'>
                                    <div className='PortFolioProject_Label'>
                                        Frontend
                                    </div>
                                    <div className='PortFolioProject_Value'>
                                        React, HTML, CSS, JavaScript, Node.js
                                    </div>
                                </div>
                                <div className='PortFolioProject_Inner_descriptions'>
                                    <div className='PortFolioProject_Label'>
                                        배포 여부
                                    </div>
                                    <div className='PortFolioProject_Value'>
                                        O
                                    </div>
                                </div>
                                <div className='PortFolioProject_Inner_descriptions'>
                                    <div className='PortFolioProject_Label'>
                                        배포 링크
                                    </div>
                                    <div className='PortFolioProject_Value'>
                                        <button className='linkGo' onClick={() => {window.open(portFolio_Netlify)}}>https://lscpofol.netlify.app/</button>
                                    </div>
                                </div>
                                <div className='PortFolioProject_Inner_descriptions'>
                                    <div className='PortFolioProject_Label'>
                                        Git
                                    </div>
                                    <div className='PortFolioProject_Value'>
                                    <button className='git_PF' onClick={() => {window.open(git_PortFolio)}}>GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
    );
};
function PortFolio1 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_MainPage} alt='Portfolio_MainPage'/>
        </div>
    )
}
function PortFolio2 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_projectPage} alt='Portfolio_projectPage'/>
        </div>
    )
}
function PortFolio3 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_notesPage} alt='Portfolio_notesPage'/>
        </div>
    )
}
function PortFolio4 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_notesClose} alt='Portfolio_notesClose'/>
        </div>
    )
}
function PortFolio5 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_notesSub} alt='Portfolio_notesSub'/>
        </div>
    )
}
function PortFolio6 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_notesCloseSub} alt='Portfolio_notesCloseSub'/>
        </div>
    )
}
function PortFolio7 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_aboutMe} alt='Portfolio_aboutMe'/>
        </div>
    )
}
export default PortFolioProject;