import React from 'react';
import '../css/aboutMe.css';
import Header from '../main/Header';
const AboutMe = () => {
    
    return (
        <div className='real_Main'>
        <Header/>
                <div className='aboutMePage'>
                    <div className='aboutMeContent'>
                        <section className='sectionDiv'>
                            <div className='myInformation'>
                                <h2 className='myInformationH2'>About Me</h2>
                                <PersonalInfo></PersonalInfo>
                            </div>
                            <div className='myInformation'>
                                <h2 className='myInformationH2'>Education</h2>
                                <Education></Education>
                            </div>
                            <div className='myInformation'>
                                <h2 className='myInformationH2'>Ability</h2>
                                <Ability></Ability>
                            </div>
                        </section> 
                    </div>
                </div>
        </div>
    );
};

function PersonalInfo() {
    return(
        <ul className='aboutMeUlTag'>
            <li className='aboutMeLiTage'>
                <span className='aboutMeSpanTag'>Name</span>
                이승찬 / Lee Seung Chan
                <span className='aboutMeSpanTag'>Name</span>
            </li>
            <li className='aboutMeLiTage'>
                <span className='aboutMeSpanTag'>Birth</span>
                1998.01.30 / 25세
                <span className='aboutMeSpanTag'>Birth</span>
            </li>
            <li className='aboutMeLiTage'>
                <span className='aboutMeSpanTag'>Address</span>
                용인시 기흥구 언남동 동일하이빌 언남동 107-602
                <span className='aboutMeSpanTag'>Address</span>
            </li>
            <li className='aboutMeLiTage'>
                <span className='aboutMeSpanTag'>Phone</span>
                010-8743-7208
                <span className='aboutMeSpanTag'>Phone</span>
            </li>
            <li className='aboutMeLiTage'>
                <span className='aboutMeSpanTag'>Email</span>
                tmdcks9801@naver.com
                <span className='aboutMeSpanTag'>Email</span>
            </li>
        </ul>
    );
};

function Education() {
    return(
        <ul className='aboutMeUlTag'>
            <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>University</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>Name</span>
                            강동대학교
                            <span className='aboutMeSpanTag'>Name</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>Major</span>
                            보건의료행정학과
                            <span className='aboutMeSpanTag'>Major</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>Graduated</span>
                            2017.03.01 ~ 2019.02.14
                            <span className='aboutMeSpanTag'>Graduated</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>University</span>
            </li>
        </ul>
    );
};

function Ability() {
    return(
        <ul className='aboutMeUlTag'>
             <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>Education</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2022</span>
                            비트캠프 강남센터 / 2022.04 ~ 2022.08
                            <span className='aboutMeSpanTag'>2022</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>Education</span>
            </li>
            <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>License</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2021</span>
                            3D프린터운용기사
                            <span className='aboutMeSpanTag'>2021</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2018</span>
                            보험심사평가사2급
                            <span className='aboutMeSpanTag'>2018</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2018</span>
                            의료정보관리사
                            <span className='aboutMeSpanTag'>2018</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2016</span>
                            운전면허 2종 보통
                            <span className='aboutMeSpanTag'>2016</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>License</span>
            </li>
            <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>Tools</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>1</span>
                            Visual Studio Code
                            <span className='aboutMeSpanTag'>1</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2</span>
                            Eclipse
                            <span className='aboutMeSpanTag'>2</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>Tools</span>
            </li>
            <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>Development</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>1</span>
                            HTML5
                            <span className='aboutMeSpanTag'>1</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2</span>
                            CSS3
                            <span className='aboutMeSpanTag'>2</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>3</span>
                            JavaScript
                            <span className='aboutMeSpanTag'>3</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>4</span>
                            jQuery
                            <span className='aboutMeSpanTag'>4</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>5</span>
                            React
                            <span className='aboutMeSpanTag'>5</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>6</span>
                            Spring(Java)
                            <span className='aboutMeSpanTag'>6</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>7</span>
                            Spring Boot(Java)
                            <span className='aboutMeSpanTag'>7</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>Development</span>
            </li>
            <li className='aboutMeLiTagSub'>
                <span className='aboutMeSpanTag'>Database</span>
                    <ul className='aboutMeUlTagSub'>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>1</span>
                            Oracle
                            <span className='aboutMeSpanTag'>1</span>
                        </li>
                        <li className='aboutMeLiTage'>
                            <span className='aboutMeSpanTag'>2</span>
                            MySQL
                            <span className='aboutMeSpanTag'>2</span>
                        </li>
                    </ul>
                <span className='aboutMeSpanTag'>Database</span>
            </li>
        </ul>
    )
}
export default AboutMe;