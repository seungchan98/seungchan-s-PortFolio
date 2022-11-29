import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import '../css/studyNotes.css';
import Header from '../main/Header';
import SideBarUl from './SideBarUl';

const SpringNotes = () => {
    const [visible, setVisible] = useState(false);
    // const [count, setCount] = useState(11);

    const toggleSideBar = () => {
        setVisible(visible => !visible);//on,off 개념 boolean
    }

    return (
        <>
            <Header/>
            <div className='StudyNotesPageStart'>
                <div className={visible ? 'StudyNotesPageSideBarHide' : 'StudyNotesPageSideBarShow'}>
                    <SideBarUl></SideBarUl>
                    <button className={visible ? 'sideBarHiddenBtn' : 'sideBarShowBtn'} onClick={() => toggleSideBar()}> {/*클릭시 이벤트 발생*/}
                        {}
                    </button>
                </div>
                
                <div className={visible ? 'StudyNotesContentWide' : 'StudyNotesContent'}>
                    <h2 className='StudyNotesContentH2'>
                            Spring Note
                        <p className='StudyNotesContentPTag'>
                            Writed : 2022-10-19
                        </p>
                    </h2>
                    <div className='AboutStudy'>
                           <p>Spring FramworkJAVA  :  ENTERPRISE APPLICATION 개발에 사용되는 자바플랫폼을 위한 오픈소스 어플리케이션 프레임워크이다</p>
                           <p>📌 특징<br/>
                            - 자바 객체를 담고 있는 경량 컨테이너이다. 객체의 생성, 소멸과 같은 라이프 사이클을 관리하며 스프링으로 부터 필요한 객체를 얻어올 수 있다.<br/>
                            - POJO(Plain Old Java Object) 기반의 개발<br/>
                            - 제어 반전(IoC - Inversion of Control)을 지원, 컨트롤의 제어권이 사용자가 아니라 프레임워크에 있어서 필요에 따라 스프링에서 사용자 코드를 호출 할 수 있다<br/>
                            - 의존성 주입 DI(Dependency Injection)을 지원, 설정파일을 통해서 객체간의 의존 관계를 설정할 수 있다<br/>
                            - AOP(Aspect Oriented Programming) 지원<br/>
                            - 트랜잭션 처리를 위한 방법을 제공<br/>
                            - 영속성과 관련되 다양한 서비스를 제공하며, myBatis, hibernate등 데이터베이스 처리 라이브러리와 연결할 수 있는 인터페이스를 제공한다<br/>
                            - 동적인 웹 사이트 개발하기 위한 여러가지 서비스를 제공<br/>
                            - MVC Framework를 제공한다.
                           </p>
                           
                    </div>
                    <div className='StudyNotes_line'></div>
                </div>
                <p className='justPtag'>Copyright 2022. LSC. All rights reserved</p>
            </div>
    </>
    );
};

export default SpringNotes;