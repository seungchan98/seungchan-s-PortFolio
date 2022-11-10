import React, {useState} from 'react';
import '../css/studyNotes.css';
import Header from '../main/Header';
import SideBarUl from './SideBarUl';

const GitHubNotes = () => {
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
                            Git 
                        <p className='StudyNotesContentPTag'>
                            Writed : 2022-10-25
                        </p>
                    </h2>
                    <div className='AboutStudy'>
                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Git 이란?</i><br/>
                            &emsp;- GIT은 형상 관리 프로그램<br/>
                            &emsp;- 이전에는 SVN으로 형상 관리를 했지만 요즘은 GIT으로 형상 관리를 하는 것이 추세이다<br/>
                            &emsp;- SVN은 변경 사항이 없는 파일도 확인을 하지만 GIT은 변경 사항이 있는 파일만 확인을 하므로 속도면에서 우세하기 때문이다
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>GitHub</i><br/>
                        &emsp;- 깃허브(GitHub)는 분산 버전 관리 툴인 깃(Git)을 사용하는 프로젝트를 지원하는 웹호스팅 서비스이다.<br/>
                        &emsp;- 루비 온 레일스로 작성되었다.<br/>
                        &emsp;- GitHub는 영리적인 서비스와 오픈소스를 위한 무상 서비스를 모두 제공한다
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Git 저장소</i><br/>
                        &emsp;- 저장소는 관리하고자 하는 모든 소스 코드 및 디렉토리가 저장되는 곳으로 여러 개의 프로젝트를 하나의 저장소에서 관리할 수 있다. <br/>
                        &emsp;- 저장소는 특별한 데이터베이스처럼 보이지만 사실은 디렉토리와 파일 기반으로 데이터를 관리하며 생성한 저장소 하위의 .git 디렉토리에 저장되어 있다.
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>(1)Git 저장소 기반으로 프로젝트 관리하는 방법</i><br/>
                        &emsp;- Git 저장소에 신규 프로젝트를 생성해서 반영하는 방법으로 처음으로 프로젝트와 저장소를 생성할때 사용한다.<br/>
                        &emsp;- Git 저장소에 누군가가 이미 만들어 놓은 프로젝트를 활용하고 싶다면 해당 프로젝트를 복제해서 사용할 수 있다.
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>(2)Git 저장소 생성</i><br/>
                        &emsp;- Git 저장소로 사용할 디렉토리를 생성한다.<br/>
                        &emsp;&emsp;-&gt; D:\git_home\git_repo 디렉토리 만들기<br/>
                        &emsp;&emsp;-&gt; 윈도우 탐색기에 폴더로 작성해도 되고 리눅스로 만들어 된다<br/>
                        &emsp;- git init<br/>
                        &emsp;&emsp;-&gt; 생성한 디렉토리를 Git이 저장소로 인식할 수 있도록 초기화한다.<br/> 
                        &emsp;&emsp;-&gt; 초기화하면 .git 디렉토리가 생성된다.<br/>
                        &emsp;&emsp;-&gt; "." 이 붙어서 숨김 디렉토리로 인식한다.<br/>
                        &emsp;&emsp;-&gt; 해제하려면 .git를 삭제하면 된다.
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Git으로 형상 관리하기</i><br/>
                        &emsp;💡기본용어<br/>
                        &emsp;&emsp;1) 스냅샷 (Snapshot)<br/> 
                        &emsp;&emsp;&emsp;- Git에서 커밋할 때마다 발생하며 커밋한 시점의 형상 관리 상태를 의미한다.<br/>
                        &emsp;&emsp;&emsp;- 버전이라는 의미도 포함하고 있다.<br/>
                        &emsp;&emsp;2) 트리(tree)<br/>
                        &emsp;&emsp;&emsp;- 파일과 디렉토리의 구조 정보를 저장하고 있다.<br/>
                        &emsp;&emsp;&emsp;- 파일 시스템이 트리구조를 가지고 있기 때문에 형상 관리 역시 트리 형태로 스냅샷을 저장한다.<br/>
                        &emsp;&emsp;3) 저작자(Author)<br/>
                        &emsp;&emsp;&emsp;- Git에서 관리하고 있는 파일 혹은 디렉토리를 최초로 생성한 사람의 정보이다.<br/>
                        &emsp;&emsp;&emsp;- 일반적으로 사람을 식별할 수 있는 이름, 이메일 등의 정보를 저장한다.<br/>
                        &emsp;&emsp;4) 커미터(Committer)<br/>
                        &emsp;&emsp;&emsp;- 파일을 변경한 사람<br/>
                        &emsp;&emsp;&emsp;- 최초 파일이 저장소에 반영되면 저작자와 커미터가 동일하지만, 이후 해당 파일을 다른 사람이 수정하면 커미터가 변경된다.<br/>
                        &emsp;&emsp;&emsp;- 저작자는 파일을 생성한 사람, 커미터는 파일을 변경한 사람<br/>
                        &emsp;&emsp;5) 커밋 메시지(Commit Message)<br/>
                        &emsp;&emsp;&emsp;- Git은 커밋할 때 반드시 커밋에 대한 메시지를 저장하도록 되어있다.<br/>
                        &emsp;&emsp;&emsp;- 명령어의 파라미터로 전달할 수도 있고, 에디터를 통해서 많은 내용의 메시지를 저장해서 전달할 수도 있다.<br/>
                        &emsp;&emsp;&emsp;- 메시지는 되도록 상세히 작성해 두는 것이 좋다.<br/>
                        &emsp;&emsp;6) 부모 커밋(Parent Commit)<br/>
                        &emsp;&emsp;&emsp;- 현재 커밋이 참조하고 있는 상위 커밋을 의미한다.<br/>
                        &emsp;&emsp;&emsp;- 최초 커밋시에는 부모 커밋 객체가 없지만, 이후 다시 커밋을 하게 되면, 현재 커밋된 객체가 부모 커밋 객체가 되고 나중에 커밋한 객체가 커런트 객체가 된다.
                        </p>
                           
                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Git의 스테이징 단계</i><br/>
                        &emsp;- git add으로 진행되는 형상 관리가 3가지 영역에서 진행된다.<br/> 
                        &emsp;① 워킹 디렉토리<br/>
                        &emsp;&emsp;- 소스 코드를 작업하는 영역으로 코드를 추가, 수정, 삭제하는 작업이 이루어지는 영역을 의미한다.<br/> 
                        &emsp;② 스테이징 영역<br/>
                        &emsp;&emsp;- 워킹 디렉토리에서 git add 명령을 실행하면 파일들은 Git의 스테이징 영역으로 이동하며 이를 통해 소스 코드의 상태 정보를 확인할 수 있다.<br/> 
                        &emsp;③ 저장소 영역<br/>
                        &emsp;&emsp;- 스테이징 영역에 있는 소스 코드에 git commit 명령을 실행하면 최종적으로 Git의 저장소에 반영된다.<br/>
                        </p>   

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>Git 이력 조회 및 변경 내용 비교</i><br/>
                        &emsp;➀ 이력 관리 기능<br/>
                        &emsp;&emsp;- 소스 코드가 언제 누구에 의해서 생성, 변경, 삭제를 했는 지 확인을 할 수 있다.<br/>
                        &emsp;➁ 스냅샷<br/>
                        &emsp;&emsp;- Git에서는 커밋이 이루어질 때마다 모든 형상 관리 파일들을 바이너리 형태로 묶어서 관리하는 것<br/>
                        &emsp;&emsp;- Git에서 하나의 스냅샷은 하나의 커밋을 의미하며, 스냅샷 단위로 이력을 관리한다.<br/> 
                        &emsp;➂ git log<br/>
                        &emsp;&emsp;- 이력 정보 확인<br/>
                        &emsp;&emsp;- 커밋한 작업자, 일시, 메시지를 확인할 수 있다.<br/> 
                        &emsp;➃ git log –p<br/>
                        &emsp;&emsp;- 버전과 버전사이의 코드 상태에서의 차이점을 비교<br/>
                        &emsp;⑤ git log ––oneline<br/>
                        &emsp;&emsp;- commit id의 일부와 commit message만 보여준다.<br/> 
                        &emsp;⑥ git diff<br/>
                        &emsp;&emsp;- 저장소의 파일과 워킹 디렉토리에 있는 파일을 비교해, 파일내의 콘텐츠 변경 부분을 확인할 수 있다.<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>과거 특정 시점으로 돌아가는 방법</i><br/>
                        &emsp;(1) reset<br/>
                        &emsp;&emsp;- 초기화 (취소) - 되돌린 이후 버전 삭제<br/>
                        &emsp;&emsp;- 이미 push한 상태라면 reset은 할 수 없다<br/>
                        &emsp;&emsp;- 수정된 파일의 내용은 그대로 이다. -&gt; 다시 git add / git commit 해야 한다.<br/>
                        &emsp;(2) revert<br/>
                        &emsp;&emsp;- 되돌리기<br/>
                        &emsp;&emsp;- 되돌린 이후 버전 유지<br/>
                        &emsp;&emsp;- 버전 아이디를 역순으로 하나씩 되돌려야 한다. - 수정한 파일의 내용은 사라지고 이전 버전의 내용이 그대로 다시 나온다.<br/>
                        &emsp;(3) 되돌리기<br/>
                        &emsp;&emsp;git reset —hard<br/>
                        &emsp;&emsp;git revert 버전아이디 (역순으로 해야 함)<br/>
                        </p>

                        <p>📌 <i style={{fontWeight:'bold', fontSize:'20px'}}>브랜치와 머지(Branch, Merge)</i><br/>
                        &emsp;(1) 브랜치(Branch)<br/>
                        &emsp;&emsp;- 개발을 하다 보면 코드를 여러 개로 복사해야 하는 일이 자주 생긴다.<br/>
                        &emsp;&emsp;- 코드를 통째로 복사하고 나서 원래 코드와는 상관없이 독립적으로 개발을 진행할 수 있는데, 이렇게 독립적으로 개발하는 것이 브랜치다.<br/>
                        &emsp;&emsp;- 모든 버전 관리 시스템은 브랜치를 지원한다.<br/>
                        &emsp;(2) 브랜치가 필요한 경우<br/>
                        &emsp;&emsp;- 동일한 상품이지만 고객사별 다른 대응(버전)이 필요할 때<br/>
                        &emsp;&emsp;- 개발 시, 일정기간 동안 실험적인 일(작업)을 하게 될 때<br/>
                        &emsp;&emsp;- 서비스 적용과 개발 진행을 병렬로 처리할 때<br/>
                        &emsp;(3) 머지(Merge)<br/> 
                        &emsp;&emsp;- 특정 규칙에 따라 순서대로 둘 이상의 파일을 합쳐 하나의 파일로 만드는 것<br/>
                        &emsp;(4) 명령어<br/>
                        &emsp;&emsp;1) 브랜치 확인 – git branch<br/>
                        &emsp;&emsp;2) 브랜치 만들기 - git branch 브랜치명<br/>
                        &emsp;&emsp;3) 포인터 변경 - git checkout 브랜치명<br/>
                        &emsp;&emsp;4) 변경된 내용을 합치기 - git merge 병합할_브랜치명<br/>
                        &emsp;&emsp;&emsp;먼저 master로 포인터를 옮긴 후, master에 브랜치를 머지한다.<br/>
                        &emsp;&emsp;5) 브랜치명 삭제하기 - git branch -d 브랜치명<br/>
                        &emsp;&emsp;저장소를 만들게 되면 기본 브랜치는 'master' 브랜치이다<br/>
                        </p>

                    </div>
                    <div className='StudyNotes_line'></div>
                </div>
                <p className='justPtag'>Copyright 2022. LSC. All rights reserved</p>
            </div>
    </>
    );
};

export default GitHubNotes;
