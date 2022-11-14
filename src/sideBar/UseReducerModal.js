import React from 'react';
import '../css/useReducerModal.css';

const UseReducerModal = ({onClose}) => {
    return (
        <>
        <div className='userReducerModalBG'>
            <div className='userReducerPopup'>
                <div className='popUpHeader' onClick={onClose}>
                    <div className='popUpHeaderSub'>
                        <div className='popUpHeaderCloseX'>
                            <button className='firstCloseX'></button>
                            <button className='secondCloseX'></button>
                            <button className='thirdCloseX'></button>
                        </div>
                    </div>
                </div>
                <div className='popUpContent'>

                </div>
            </div>
        </div>
        </>
    );
};

export default UseReducerModal;