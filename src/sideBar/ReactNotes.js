import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../css/studyNotes.css';
import Header from '../main/Header';
import SideBarUl from './SideBarUl';
import UseReducerModal from './UseReducerModal';
const ReactNotes = () => {
    const [visible, setVisible] = useState(false);
    const [useReducerModal, setUseReducerModal] = useState(false);
    const modalOpen = () => {
        setUseReducerModal(true);
    }
    const modalClose = () => {
        setUseReducerModal(false)
    }

    const toggleSideBar = () => {
        setVisible(visible => !visible);//on,off 개념 boolean
    }

    const NodejsUrl = 'https://nodejs.org/ko/';
    const YarnUrl = 'https://classic.yarnpkg.com/en/docs/install';
    const vsCodeUrl = 'https://code.visualstudio.com/';
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
                            React 
                        <p className='StudyNotesContentPTag'>
                            Writed : 2022-11-14
                        </p>
                    </h2>
                    <div className='AboutStudy'>
                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>React란?</i><br/>
                            &emsp;- React는 UI를 구현하는 JavaScript 라이브러리이다<br/>
                            &emsp;- 웹 앱(Web App) 또는 네이티브 앱(Native App)<br/>
                            &emsp;- 유지보수를 쉽게 관리하고, DOM('HTML과 스크립트 언어(JavaScript)를 서로 이어주는 역활') 관리가 수월하다.<br/>
                            &emsp;- 성능최적화가 쉽고, 컨포넌트에 집중할수 있다. 그리고 es6 기반으로 배우기가 쉽다<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Nodejs란?</i><br/>
                        &emsp;- <Link onClick={() => {window.open(NodejsUrl)}} style={{color:'#004EA2'}}>https://nodejs.org/ko/</Link><br/>
                        &emsp;- 리액트 프로젝트를 준비하기 위해 필요한 webpack, babel 등의 도구들을 실행하는데 사용된다.<br/>
                        &emsp;- npm은 자바스크립트 프로그래밍 언어를 위한 패키지 관리자이다. <br/>
                        &emsp;- Nodejs를 설치하면 npm이 설치되어서 npm으로 해도 되긴하지만, yarn 을 사용하면 휠씬 빠르다.
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>yarn이란?</i><br/>
                        &emsp;- <Link onClick={() => {window.open(YarnUrl)}} style={{color:'#004EA2'}}>https://classic.yarnpkg.com/en/docs/install</Link> <br/>
                        &emsp;- 자바스크립트 패키지를 관리하기 위해서 사용된다. <br/>
                        &emsp;- yarn은 npm 동작 방식과 비슷하지만 npm의 단점을 보완해 성능과 속도를 개선한 패키지 관리 도구이다. <br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>npm VS yarn</i><br/>
                        &emsp;- npm은 여러 패키지를 설치할 경우 패키지가 완전히 설치될 때까지 기다렸다가 다른 패키지로 이동한다. 작업이 패키지별로 순차적으로 실행된다는 것이다.<br/>
                        &emsp;- yarn은 이 작업들을 병렬로 설치하기 때문에 성능과 속도가 향상된다는 장점이 있다.
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>VS code (에디터)</i><br/>
                        &emsp;- <Link onClick={() => {window.open(vsCodeUrl)}} style={{color:'#004EA2'}}>https://code.visualstudio.com/</Link><br/>
                        &emsp;- vs code 확장설치 (부가기능설치)<br/>
                        &emsp;&emsp;⓵ Live Server<br/> 
                        &emsp;&emsp;⓶ Korean Language Pack for Visual Studio Code<br/>
                        &emsp;&emsp;⓷ Auto Close Tag<br/>
                        &emsp;&emsp;⓸ Auto Complete Tage<br/>
                        &emsp;&emsp;⓹ Auto Import<br/>
                        &emsp;&emsp;⓺ Auto Rename Tag<br/>
                        &emsp;&emsp;⓻ Reactjs code snippets - 코드 자동 생성<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>컴포넌트</i><br/>
                        &emsp;- 컴포넌트는  UI를 구성하는 조각(piece)에 해당되며, 독립적으로 분리되어 재사용 됨을 목적으로 사용된다.<br/>
                        &emsp;- React 앱에서 컴포넌트는 개별적인 JavaScript 파일로 분리되어 관리한다.<br/>
                        </p>
                           
                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>함수형 컴포넌트</i><br/>
                        &emsp;- React 컴포넌트는 개념상 JavaScript 함수와 유사하다.<br/> 
                        &emsp;- 컴포넌트 외부로부터 속성(props)을 전달 받아 어떻게 UI를 구성해야 핧지 설정하여 React 요소 (JSX를 Babel이 변환 처리)로 변환한다.<br/> 
                        &emsp;- 이러한 문법 구문을 사용하는 컴포넌트를 React는 '함수형(functional)'으로 분류한다.<br/> 
                        </p>   

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>JSX 규칙 : JavaScript + XML</i><br/>
                        &emsp;- JSX는 리액트 컴포넌트를 작성하면서 return문에 사용하는 문법이다.<br/>
                        &emsp;- JSX가 하는일은 React 요소(Element)를 만드는 것이다.<br/>
                        &emsp;- 얼핏보면 JSX는 JavaScript 문법확장(JavaScript eXtension)으로 구문이 HTML과 유사하다. 하지만 React요소는 실제 DOM요소가 아니라 JavaScript 객체이다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>JSX 규칙</i><br/>
                        &emsp;1. 태그는 반드시 닫아줘야 한다.<br/>
                        &emsp;2. 최상단에서는 반드시 div로 감싸주어야 한다. (Fragment 사용)<br/>
                        &emsp;3. JSX안에서 자바스크립트 값을 사요아하고 싶을 떄는 {}를 사용한다<br/>
                        &emsp;4. 조건부 렌더링을 하고 싶으면 &&연산자나 삼항 연산자를 사용한다.<br/>
                        &emsp;5. 인라인 스타일링은 항상 객체형식으로 작성한다.<br/>
                        &emsp;6. 별도의 스타일파일을 만들었으면 class 대신 className을 사용한다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>React Hooks란?</i><br/>
                        &emsp;- 리액트 훅은 리액트 클래스형 컴포넌트에서 이용하던 코드를 작성할 팔요없이 함수형 컴포넌트에서 다양한 기능을 사용할 수 있게 만들어준 라이브러리라고 할 수 있는데<br/> 
                        &emsp;&emsp;React 16.8버전에 새로 추가된 기능이다. 이는 함수형 컴포넌트에 맞게 만들어진 것으로 함수형 컴포넌트에서만 사용 가능하다.<br/>
                        &emsp;- Hooks를 사용하는 이유<br/>
                        &emsp;&emsp;1. 코드를 간결하게 작성할 수 있다.<br/>
                        &emsp;&emsp;2. 코드를 재사용할 수 있다.<br/>
                        &emsp;&emsp;3. 사이드 이펙트를 방지할 수 있다.<br/>
                        &emsp;&emsp;4. class 없이 리액트 기능을 사용할 수 있다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>useState</i><br/>
                        &emsp;- 간단하게 state는 변수이다. state는 일반 변수와 다르게 값이 변하게 되면 렌더링이 일어난다. 즉, 값이 변하게 되면 연관있는 컴포넌트둘이 다시 렌더링되어 화면이 바뀐다.<br/>
                        &emsp;&emsp;state와 함께 사용되는 함수는 setState이다. setStates는 state값을 변경시켜주는 함수이다. state는 변수, setState는 state를 변경시켜주는 함수,<br/>
                        &emsp;&emsp;useState는 state, setState를 return 하면서 초기값을 설정해주는 hook이다.<br/>
                        &emsp;- 예제<br/>
                        &emsp;&emsp;const [state, setState] = useState(초기값);
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>useEffect</i><br/>
                        &emsp;- useEffect함수는 리액트 컴포넌트가 마운트, 업데이트, 언마운트 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook이다.<br/>
                        &emsp;- useEffect를 쓰면 코드를 간단하게 줄여줄 뿐만 아니라 렌더링 시 발생하는 side effect도 방지할 수 있다.<br/>
                        &emsp;- 작성방법<br/>
                        &emsp;&emsp;1. useEffect(() =&gt; &#123;&#125;) : 렌더링 될 때마다 실행된다<br/>
                        &emsp;&emsp;2. useEffect(() =&gt; &#123;&#125;,[]) : 렌더링 후 딱 한번만 실행된다.<br/>
                        &emsp;&emsp;3. useEffect(() =&gt; &#123;&#125;,[상태를 나타내는 변수]) : 렌더링 후 한번 실행되고, 상태를 나타내는 변수가 바뀔 때마다 실행된다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>useRef</i><br/>
                        &emsp;- JavaScript를 사용할때에는, 우리가 특정 DOM을 선택해야 하는 상황에 getElementById, querySelector같은 DOM Selector 함수를 사용해서 DOM을 선택하지만,<br/>
                        &emsp;&emsp;리액트에서 특정 요소의 크기를 가져온다거나, 포커스를 설정해야한다거나 특정 DOM을 선택해야할 경우 useRef함수를 사용한다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>useReducer -&gt;<button style={{color:'#004EA2', borderBottom:'1px solid #004EA2', fontSize:'15px'}} onClick={modalOpen}>useReducer 샘플 코드 qhrl</button></i><br/>
                        &emsp;- useReducer는 한컴포넌트 내에서 State를 업데이트하는 로직 부분을 그 컨포넌트로부터 분리시키는 기능을 해준다. 그렇기때문에 useReducer는 State 업데이트 로직을<br/>
                        &emsp;&emsp;분리하여 컴포넌트의 외부에 작성하는 것을 가능하게 함으로써, 코드의 최적화를 이루게 해준다.<br/>
                        &emsp;💡 useReducer VS useState<br/>
                        &emsp;&emsp;● useState<br/>
                        &emsp;&emsp;&emsp;○ 관리해야 할 State가 1개일 경우<br/>
                        &emsp;&emsp;&emsp;○ 그 State가 단순한 숫자, 문자열 또는 Boolean 값일 경우<br/>
                        &emsp;&emsp;● useReducer<br/>
                        &emsp;&emsp;&emsp;○ 관리해야 할 State가 1개 이상, 복수일 경우<br/>
                        &emsp;&emsp;&emsp;○ 혹은 현재는 단일 State 값만 관리하지만, 추후 유동적일 가능성이 있는 경우<br/>
                        &emsp;&emsp;&emsp;○ State의 구조가 복잡해질 것으로 보이는 경우<br/>
                        &emsp;
                        <br/>
                        </p>
                            {
                                useReducerModal && <UseReducerModal onClose={modalClose}/>
                            }
                    </div>
                    <div className='StudyNotes_line'></div>
                </div>
                <p className='justPtag'>Copyright 2022. LSC. All rights reserved</p>
            </div>
    </>
    );
};

export default ReactNotes;