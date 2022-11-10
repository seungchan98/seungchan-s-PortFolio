import React, {useState} from 'react';
import '../css/PortFolioProject.css';
import Portfolio_MainPage from '../image/Portfolio_MainPage.png';
const PortFolioProject = () => {
    // const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // var slides = document.getElementsByClassName('.PortFolioProject_Image_Carousel');
    var slide = document.getElementsByClassName('PortFolioProject_Carousel');
    //slide의 개수를 구할려면 slide.length로 바로사용
    // var slideCount = document.getElementsByClassName('PortFolioProject_Carousel').length;
    // var [currentIdx, setCurrentIdx] = useState(0);
    var currentIdx = 0;

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
                                    <Kream1></Kream1>
                                    <Kream2></Kream2>
                                    <Kream3></Kream3>
                                    <Kream4></Kream4>
                                    <Kream5></Kream5>
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
                            </div>
                        </div>
                    </div>
                    
                </div> 
    );
};
function Kream1 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' src={Portfolio_MainPage} alt='Kream_mainPage'/>
        </div>
    )
}
function Kream2 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' alt='Kream_shopDetailPage'/>
        </div>
    )
}
function Kream3 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' alt='Kream_buyFinPage'/>
        </div>
    )
}
function Kream4 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' alt='Kream_buyPayPage'/>
        </div>
    )
}
function Kream5 () {
    return (
        <div className='PortFolioProject_Carousel'>
            <img className='PortFolioProjectImage-Show' alt='Kream_csPage1'/>
        </div>
    )
}
export default PortFolioProject;