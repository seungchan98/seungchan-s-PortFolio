import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
    const url = 'https://github.com/seungchan98/seungchan-s-PortFolio';

    return (
        <div className='Footer'>
            <div className='Footer_ex'>본 페이지는 상업적 목적이 아닌</div>
            <div className='Footer_ex'>개인 포트폴리오 공개용이며</div>
            <div className='Footer_ex'>코드는 모두 깃허브에 공개되어 있습니다</div>
            <div className='Footer_ex'>
                <span className='Footer_Skill'>nodejs</span>
                <span className='Footer_Skill'>react</span>
                <span className='Footer_Skill'>javascript</span>
                로 제작되었습니다
            </div>
            <div className='profile-card-social'>
                <button to='#' className='github' onClick={() => {window.open(url)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Footer;