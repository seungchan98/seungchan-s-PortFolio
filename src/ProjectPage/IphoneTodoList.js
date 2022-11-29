import React from 'react';
import { Link } from 'react-router-dom';
import '../css/iphoneTodoList.css';
import IphoneTodoListMain from '../image/IphoneTodoList.png';
import IphoneTodoListli from '../image/IphoneTodoList2.png';
import IphoneTodoListDel from '../image/IphoneTodoListDel.png';
import IphoneTodoListWrite from '../image/IphoneTodoListWrite.png';
const IphoneTodoList = () => {
    // const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // var slides = document.getElementsByClassName('.KreamProject_Image_Carousel');
    var slide = document.getElementsByClassName('IphoneTodoList_Carousel');
    //slide의 개수를 구할려면 slide.length로 바로사용
    // var slideCount = document.getElementsByClassName('KreamProject_Carousel').length;
    var currentIdx = 0;
    const git_iphoneTodoList = 'https://github.com/seungchan98/Iphone_TodoList';
    const iphoneTodoList_Netlify = 'https://iphonetodolist.netlify.app/';
    const page = (num) => {
        document.querySelector('.IphoneTodoList_Image_Carousel').style.left = -num * 490 + 'px';
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
        <div className='IphoneTodoList_Content'>
                    <div className='IphoneTodoList_SubContent'>
                        <div className='IphoneTodoList_ContentTitle'>TodoList (IphoneTodoList)</div>
                        <div className='IphoneTodoList_SubContentTitle'>2022.11.24 ~ 2022.11.28<span>(개인프로젝트)</span></div>

                        <div className='IphoneTodoList_Show'>
                            <div className='IphoneTodoList_Image'>
                                <div className='IphoneTodoList_Image_Carousel'>{/*여기다가 transform */}
                                    <IphoneTodoList1/>
                                    <IphoneTodoList2/>
                                    <IphoneTodoList3/>
                                    <IphoneTodoList4/>
                                </div>
                                <nav className='IphoneTodoListPageCount'>
                                    <div className='IphoneTodoListPageCount_Sub'>
                                        <button className='btn1' onClick={prevBtn}>
                                            prev
                                        </button>
                                        <button className='btn2' onClick={nextBtn}>
                                            next
                                        </button>
                                    </div>
                                </nav>
                            </div>
                            
                            
                            <div className='IphoneTodoList_Explain'>
                                <div className='IphoneTodoList_descriptions'>
                                <b>간단하게 리스트를 추가 삭제 하는 TodoList를 구현해봤습니다.</b>
                                학원에서도 개발한적있었는데 다시한번 구현을 해보고 싶고 리액트 공부, 복습하는겸 구현해보았습니다.<br/><br/>
                                리스트 페이지구현을 생각하다가 iphone디자인으로 만들어 보고 싶어서 iphone디자인으로 구현을 해보았습니다.
                                TodoList를 구현하면서 리액트의 기능들을 좀더 공부할수 있는 시간이였습니다.
                                
                                 

                                </div>
                                <div className='IphoneTodoList_Inner_descriptions'>
                                    <div className='IphoneTodoList_Label'>
                                    주요 기능
                                    </div>
                                    <div className='IphoneTodoList_Value'>
                                        - 글 작성.<br/>
                                        - 글 삭제.<br/>
                                        - 로컬스토리지에 내가 작성한  글 저장.<br/>
                                        - 작성한 시간 표시.<br/>
                                    </div>
                                </div>
                                <div className='IphoneTodoList_Inner_descriptions'>
                                    <div className='IphoneTodoList_Label'>
                                    Frontend
                                    </div>
                                    <div className='IphoneTodoList_Value'>
                                        React, JavaScript, CSS, HTML, Node.js
                                    </div>
                                </div>
                                <div className='IphoneTodoList_Inner_descriptions'>
                                    <div className='IphoneTodoList_Label'>
                                    배포여부
                                    </div>
                                    <div className='IphoneTodoList_Value'>
                                        O
                                    </div>
                                </div>
                                <div className='IphoneTodoList_Inner_descriptions'>
                                    <div className='IphoneTodoList_Label'>
                                    배포링크
                                    </div>
                                    <div className='IphoneTodoList_Value'>
                                        <button className='linkGo' onClick={() => {window.open(iphoneTodoList_Netlify)}}>https://iphonetodolist.netlify.app/</button>
                                    </div>
                                </div>
                                
                                <div className='IphoneTodoList_Inner_descriptions'>
                                    <div className='IphoneTodoList_Label'>
                                        Git
                                    </div>
                                    <div className='IphoneTodoList_Value'>
                                    <button className='linkGo' onClick={() => {window.open(git_iphoneTodoList)}}>GitHub</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
    );
};
function IphoneTodoList1 () {
    return (
        <div className='IphoneTodoList_Carousel'>
            <img className='IphoneTodoListImage-Show' src={IphoneTodoListMain} alt='IphoneTodoListMain'/>
        </div>
    )
}
function IphoneTodoList2 () {
    return (
        <div className='IphoneTodoList_Carousel'>
            <img className='IphoneTodoListImage-Show' src={IphoneTodoListli} alt='IphoneTodoListli'/>
        </div>
    )
}
function IphoneTodoList3 () {
    return (
        <div className='IphoneTodoList_Carousel'>
            <img className='IphoneTodoListImage-Show' src={IphoneTodoListDel} alt='IphoneTodoListDel'/>
        </div>
    )
}
function IphoneTodoList4 () {
    return (
        <div className='IphoneTodoList_Carousel'>
            <img className='IphoneTodoListImage-Show' src={IphoneTodoListWrite} alt='IphoneTodoListWrite'/>
        </div>
    )
}
export default IphoneTodoList;