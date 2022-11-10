import React, {useState} from 'react';
import Header from '../main/Header';
import SideBarUl from './SideBarUl';
import '../css/studyNotes.css';

const JavaNotes = () => {
    const [visible, setVisible] = useState(false);
    const [count, setCount] = useState(11);

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
                            Java EE - Enterprise Edition
                        <p className='StudyNotesContentPTag'>
                            Writed : 2022-10-25
                        </p>
                    </h2>
                    <div className='AboutStudy'>
                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>설치</i><br/>
                        &emsp;1. 컴파일러 다운로드<br/>
                        &emsp;&emsp;java.oracle.com<br/>
                        &emsp;&emsp;jdk-8u291-windows-x64.exe<br/>
                        &emsp;2. 설치<br/>
                        &emsp;&emsp;jdk-8u291-windows-x64.exe 더블클릭<br/>
                        &emsp;3. 환경변수<br/>
                        &emsp;&emsp;내 PC → 우클릭 → 속성 → 고급 시스템 설정 → 고급(탭) → 환경변수<br/>
                        &emsp;4. JDK의 위치<br/>
                        &emsp;&emsp;JAVA_HOME<br/>
                        &emsp;&emsp;C:\Program Files\Java\jdk-1.8.0_291<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>카멜의 법칙</i><br/>
                        &emsp;1. 클래스명의 첫 글자는 대문자로 시작하고 나머지는 소문자로 작성하고 단어가 바뀌면 다시 첫 글자를 다시 대문자로 시작한다.<br/>
                        &emsp;2. 변수나 메소드의 첫 글자는 소문자로 시작하고 단어가 바뀌면 다시 첫 글자를 다시 대문자로 시작한다.<br/>
                        &emsp;3. 상수는 전부 대문자로 지정한다 <br/>
                        &emsp;4. Java의 파일명은 반드시 클래스명과 동일해야 한다.<br/>
                        &emsp;5. 자바가상머신(JVM)이 가장 먼저 찾는 것은 public static void main(String[] args) 이다. 단, Servlet이 제일 먼저 찾는 것은 public void init()이다.<br/>
                        &emsp;6. 문장의 끝에는 반드시 ; 를 써야 한다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>연산자</i><br/>
                        &emsp;1. 산술연산자<br/>
                        &emsp;&emsp;*, /, +, -<br/>
                        &emsp;&emsp;% (나머지 연산자) - 반드시 양쪽의 항이 정수형이어야 한다.<br/>
                        &emsp;2. 관계연산자<br/>
                        &emsp;&emsp;&gt; 크다<br/>
                        &emsp;&emsp;&lt; 작다<br/>
                        &emsp;&emsp;&gt;= 크거나 같다<br/>
                        &emsp;&emsp;&lt;= 작거나 같다<br/>
                        &emsp;&emsp;== 같다<br/>
                        &emsp;&emsp;!= 같지 않다<br/>
                        &emsp;3. 논리연산자<br/>
                        &emsp;&emsp;-조건이 2개 이상 존재할 때<br/>
                        &emsp;&emsp;-&& (AND) : 모든 조건이 참일 때 성립<br/>
                        &emsp;&emsp;-|| (OR) : 조건 중에서 하나만 참이어도 성립<br/>
                        &emsp;4. 조건연산자<br/>
                        &emsp;&emsp;[형식] 조건 ? 참 : 거짓;<br/>
                        &emsp;5. 증감연산자<br/>
                        &emsp;&emsp;++ (1씩 증가)<br/>
                        &emsp;&emsp;-- (1씩 감소)<br/>
                        &emsp;&emsp;독립적으로 혼자 쓰일 때는 선행, 후행연산을 따지지 않는다.<br/>
                        &emsp;6. 대입연산자<br/>
                        &emsp;&emsp;=, +=, -=, *=, /=, %= 등<br/>
                        &emsp;7. 부정연산자(NOT)<br/>
                        &emsp;&emsp;!<br/>
                        &emsp;&emsp;!true → false<br/>
                        &emsp;&emsp;!false → true<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>메소드()</i><br/>
                        &emsp;- 명령어들의 집합<br/>
                        &emsp;- 기본적으로 public static void main(String[] ) 제공<br/>
                        &emsp;- 호출한 메소드는 반드시 호출한 곳으로 되돌아온다<br/>
                        &emsp;- return(결과값, 반환값)은 반드시 1개뿐이다<br/>
                        &emsp;- return이 없으면 void로 선언한다<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>조건문</i><br/>
                        &emsp;① if 문<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;- if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else 거짓일때;<br/><br/>
                        &emsp;② 다중 if문<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;- if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else if(조건) 참일때;<br/>
                        &emsp;&emsp;&emsp;&emsp;else 거짓일때;<br/><br/>
                        &emsp;③ switch 문<br/>
                        &emsp;&emsp;- 실수형 타입은 쓸 수 없다<br/>
                        &emsp;&emsp;- break 는 switch문을 벗어난다<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;switch(정수 or 문자 or 문자열 or 식)&emsp;&#123;<br/>
                        &emsp;&emsp;&emsp;case 값1: break;<br/>
                        &emsp;&emsp;&emsp;case 값2: break;<br/>
                        &emsp;&emsp;&emsp;case 값3: break;<br/>
                        &emsp;&emsp;&emsp;default :<br/>
                        &emsp;&emsp;&#125;<br/>
                        </p>    

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>반복문</i><br/>
                        &emsp;① for문<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;- for(변수명=초기치; 조건치; 증감치)&emsp;&#123;<br/>
                        &emsp;&emsp;&emsp;&emsp;참일때<br/>
                        &emsp;&emsp;&emsp;&#125;<br/><br/>
                        &emsp;② while문<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;- while(조건)&emsp;&#123;<br/>
                        &emsp;&emsp;&emsp;&emsp;참일때<br/>
                        &emsp;&emsp;&emsp;&#125; <br/><br/>
                        &emsp;③ do-while문<br/>
                        &emsp;&emsp;[형식]<br/>
                        &emsp;&emsp;&emsp;- do&emsp;&#123;<br/>
                        &emsp;&emsp;&emsp;&emsp; 참일때<br/>
                        &emsp;&emsp;&emsp;&#125;while(조건);<br/><br/>
                        &emsp;💡 다중 for문<br/>
                        &emsp;&emsp;1. for문안에 또 다른 for문이 존재<br/>
                        &emsp;&emsp;2. 서로의 변수명은 달라야 한다.<br/>
                        &emsp;&emsp;3. 겹쳐서도 안된다.<br/>
                        &emsp;💡 break<br/>
                        &emsp;&emsp;: switch, 반복문(for, while, do~while)를 벗어날 때<br/>
                        &emsp;&emsp;: 자신이 소속된 곳 1번만 벗어난다<br/>
                        &emsp;&emsp;: 만약에 2개 이상 벗어나려면 라벨을 사용 한다<br/>
                        &emsp;💡 continue<br/>
                        &emsp;&emsp;: 반복문(for, while, do~while)의 끝으로(&#123;) 무조건 이동<br/>
                        &emsp;&emsp;: 자신이 소속된 끝으로(&#123;) 무조건 이동<br/>
                        &emsp;&emsp;: 만약에 2개 이상 반복문 끝으로 이동하려면 라벨을 사용 한다<br/>
                        </p>

                    </div>
                    <div className='StudyNotes_line'></div>
                </div>
                <p className='justPtag'>Copyright 2022. LSC. All rights reserved</p>
            </div>
    </>
    );
};

export default JavaNotes;