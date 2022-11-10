import React, {useState} from 'react';
import '../css/KreamProject.css';
import Kream_shopDetailPage from '../image/Kream_shopDetailPage.png';
import Kream_buyCheck from '../image/Kream_buyCheck.png';
import Kream_buyFinPage from '../image/Kream_buyFinPage.png';
import Kream_buyPayPage from '../image/Kream_buyPayPage.png';
import Kream_csPage1 from '../image/Kream_csPage1.png'
import Kream_csPage2 from '../image/Kream_csPage2.png'
import Kream_csPage3 from '../image/Kream_csPage3.png'
import Kream_enterBuyPricePage from '../image/Kream_enterBuyPricePage.png';
import Kream_likeProPage from '../image/Kream_likeProPage.png';
import Kream_loginPage from '../image/Kream_loginPage.png';
import Kream_mainPage from '../image/Kream_mainPage.png';
import Kream_myPage from '../image/Kream_myPage.png';
import Kream_myPageEdit from '../image/Kream_myPageEdit.png';
import Kream_selectBuySizePage from '../image/Kream_selectBuySizePage.png';
import Kream_shopPage from '../image/Kream_shopPage.png';

const KreamProject = () => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    var slides = document.getElementsByClassName('.KreamProject_Image_Carousel');
    var slide = document.getElementsByClassName('KreamProject_Carousel');
    //slide의 개수를 구할려면 slide.length로 바로사용
    var slideCount = document.getElementsByClassName('KreamProject_Carousel').length;
    var [currentIdx, setCurrentIdx] = useState(0);

    const page = (num) => {
        document.querySelector('.KreamProject_Image_Carousel').style.left = -num * 490 + 'px';
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
        <div className='KreamProject_Content'>
                    <div className='KreamProject_SubContent'>
                        <div className='KreamProject_ContentTitle'>Kream(GESE-T)</div>
                        <div className='KreamProject_SubContentTitle'>2022.06 ~ 2022.08<span>(6인프로젝트)</span></div>

                        <div className='KreamProject_Show'>
                            <div className='KreamProject_Image'>
                                <div className='KreamProject_Image_Carousel'>{/*여기다가 transform */}
                                    <Kream1></Kream1>
                                    <Kream2></Kream2>
                                    <Kream3></Kream3>
                                    <Kream4></Kream4>
                                    <Kream5></Kream5>
                                    <Kream6></Kream6>
                                    <Kream7></Kream7>
                                    <Kream8></Kream8>
                                    <Kream9></Kream9>
                                    <Kream10></Kream10>
                                    <Kream11></Kream11>
                                    <Kream12></Kream12>
                                    <Kream13></Kream13>
                                    <Kream14></Kream14>
                                    <Kream15></Kream15>
                                </div>
                                <nav className='KreamPageCount'>
                                    <div className='KreamPageCount_Sub'>
                                        <button className='btn1' onClick={prevBtn}>
                                            prev
                                        </button>
                                        <button className='btn2' onClick={nextBtn}>
                                            next
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            
                            
                            <div className='KreamProject_Explain'>
                                <div className='KreamProject_descriptions'>
                                <b>한정판 스니커즈부터 명품, 가전, 테크, 음반, 트레이딩 카드까지 거래사이드 Kream사이트를 모티브한 쇼핑몰사이트이다.</b>
                                대중적이면서 첫번째 프로젝트인만큼 괜찮은 사이트를 찾다가 Kream사이트의 아이디어를 얻어 개발하였습니다.<br/><br/>
                                첫번째 프로젝트인만큼 지금까지 배운내용을 토대로 프로젝트를 진행했습니다. Frontend와 Backend를 모두 Spring으로
                                구현한 웹사이트 입니다.<br/>
                                배운내용을 정리, 공부하면서 프로젝트가 어떻게 진행되고 협업하면서 많이 배울수 있었던 시간이었습니다. 
                                
                                 

                                </div>
                                <div className='KreamProject_Inner_descriptions'>
                                    <div className='KreamProject_Label'>
                                    주요 기능
                                    </div>
                                    <div className='KreamProject_Value'>
                                        - 사고 싶은 신발을 거래 판매하기.<br/>
                                        - 원하는 신발명, 브랜드 검색하기.<br/>
                                        - 카테고리별로 찾기.<br/>
                                        - 관심상품 찜하기 기능.<br/>
                                    </div>
                                </div>
                                <div className='KreamProject_Inner_descriptions'>
                                    <div className='KreamProject_Label'>
                                     나의 역활
                                    </div>
                                    <div className='KreamProject_Value'>
                                        - 메인페이지 Footer UI 구현.<br/>
                                        - 찜하기 기능 구현.<br/>
                                        - 관심상품 나열 기능 구현.<br/>
                                        - selectBuySize(신발사이즈체크) UI 구현.<br/>
                                        - buyCheck(구매동의) UI 구현.<br/>
                                        - enterButPrice(가격입력) UI 구현.<br/>
                                        -
                                    </div>
                                </div>
                                <div className='KreamProject_Inner_descriptions'>
                                    <div className='KreamProject_Label'>
                                     Frontend
                                    </div>
                                    <div className='KreamProject_Value'>
                                        HTML, CSS, JavaScript
                                    </div>
                                </div>
                                <div className='KreamProject_Inner_descriptions'>
                                    <div className='KreamProject_Label'>
                                     Backend
                                    </div>
                                    <div className='KreamProject_Value'>
                                        Spring Framework
                                    </div>
                                </div>
                                <div className='KreamProject_Inner_descriptions'>
                                    <div className='KreamProject_Label'>
                                        Datbase
                                    </div>
                                    <div className='KreamProject_Value'>
                                        Oracle(Sqldeveloper)
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
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_mainPage} alt='Kream_mainPage'/>
        </div>
    )
}
function Kream2 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_loginPage} alt='Kream_mainPage'/>
        </div>
    )
}
function Kream3 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_shopPage} alt='Kream_shopDetailPage'/>
        </div>
    )
}
function Kream4 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_shopDetailPage} alt='Kream_buyFinPage'/>
        </div>
    )
}
function Kream5 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_selectBuySizePage} alt='Kream_buyPayPage'/>
        </div>
    )
}
function Kream6 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_buyCheck} alt='Kream_csPage1'/>
        </div>
    )
}
function Kream7 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_enterBuyPricePage} alt='Kream_csPage2'/>
        </div>
    )
}
function Kream8 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_buyPayPage} alt='Kream_csPage3'/>
        </div>
    )
}
function Kream9 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_buyFinPage} alt='Kream_enterBuyPricePage'/>
        </div>
    )
}
function Kream10 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_likeProPage} alt='Kream_loginPage'/>
        </div>
    )
}
function Kream11 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_myPage} alt='Kream_myPage'/>
        </div>
    )
}
function Kream12 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_myPageEdit} alt='Kream_buyCheck'/>
        </div>
    )
}
function Kream13 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_csPage1} alt='Kream_myPageEdit'/>
        </div>
    )
}
function Kream14 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_csPage2} alt='Kream_selectBuySizePage'/>
        </div>
    )
}
function Kream15 () {
    return (
        <div className='KreamProject_Carousel'>
            <img className='KreamProjectImage-Show' src={Kream_csPage3} alt='Kream_shopPage'/>
        </div>
    )
}
export default KreamProject;