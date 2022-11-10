import React from 'react';
import Header from './Header';
// import ShowProject from '../ProjectPage/ShowProject';
// import AboutMe from '../AboutMePage/AboutMe';
// import MenuBar from '../menuBar/MenuBar';
// import Notes from '../sideBar/Notes';
import Content from './Content';
// import AnimationCursor from '../mouseCursor/AnimationCursor';
import '../css/main.css';
// import MainContent from './MainContent';

const Main = () => {
//     const [calc, setCalc] = useState('');
//     const [operCheck, setOperCheck] = useState(true);
//     const [pointCheck, setPointCheck] = useState(true);
//     const [characters, setCharacters] = useState('1234567890@#$%^&*=');
//     const [random, setRandom] = useState('980130');
//     const [show, setShow] = useState(false);

//     const pwCLick = (e) => {
//         e.preventDefault();
//         if(document.getElementById('InputBar').value === ''){
//             alert('암호를 입력해주세요');
//             document.getElementById('InputBar').style.borderColor = 'red';
//         }else if(document.getElementById('InputBar').value == random) {
//             alert('일치합니다');
//             document.getElementById('InputBar').style.borderColor = '#4b89dc';
//             if(document.getElementById('InputBar').style.display != 'none'){
//                 document.getElementById('MainContainer').style.display = 'none'
//             }else {
//               document.getElementById('MainContainer').style.display = 'block';
//             }
//         }else if(document.getElementById('InputBar').value != random){
//             alert('암호가 맞지 않습니다');
//             document.getElementById('InputBar').style.borderColor = 'red';
//         }
//     }


//   const getNum = (e) => {
//       e.preventDefault();
//       setCalc((prev) => prev + e.target.value);
//         setOperCheck(true);
//   };

// //   const getOper = (e) => {
// //     if (operCheck) {
// //       setCalc((prev) => prev + e.target.value);
// //       setOperCheck(false);
// //     }
// //   };

// //   const getPoint = (e) => {
// //     if (calc.length === 0) {
// //       return;
// //     }
// //     if (pointCheck) {
// //       setCalc((prev) => prev + e.target.value);
// //       setPointCheck(false);
// //     }
// //   };

// //   const getResult = () => {
// //     let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

// //     if (isNaN(eval(replace_str))) {
// //       setCalc("");
// //     } else if (eval(replace_str) == Infinity) {
// //       alert("0으로 나눌수 없습니다.");
// //       setCalc("");
// //       return false;
// //     } else {
// //       setCalc((prev) => eval(replace_str));
// //     }
// //   };
  

//   const delCalc = () => {
//     setPointCheck(true);
//     setOperCheck(true);
//     let str = String(calc).slice(0, -1);
//     setCalc((prev) => str);
//   };

// //   const allClear = () => {
// //     setPointCheck(true);
// //     setCalc((prev) => "");
// //   };
//   console.log(calc);
//     return (
//         <>
//         <div className='MainContainer' id='MainContainer'>
//             <div style={{color:'white'}}>
//                 암호힌트 : 내 생년월인은?
//             </div>
//             <input className='InputBar' value={calc} readOnly id='InputBar' style={{textAlign:'center'}}/>
//             <div className='ButtonContainer' id='ButtonContainer'>
//                 <button type="button" className='Button' value={1} onClick={getNum}>1</button>
//                 <button type="button" className='Button' value={2} onClick={getNum}>2</button>
//                 <button type="button" className='Button' value={3} onClick={getNum}>3</button>
//                 <button type="button" className='Button' value={4} onClick={getNum}>4</button>
//                 <button type="button" className='Button' value={5} onClick={getNum}>5</button>
//                 <button type="button" className='Button' value={6} onClick={getNum}>6</button>
//                 <button type="button" className='Button' value={7} onClick={getNum}>7</button>
//                 <button type="button" className='Button' value={8} onClick={getNum}>8</button>
//                 <button type="button" className='Button' value={9} onClick={getNum}>9</button>
//                 <button type="button" className='Button' value={0} onClick={getNum}>0</button>
//                 <button type="button" className='Button' value={'@'} onClick={getNum}>@</button>
//                 <button type="button" className='Button' value={'#'} onClick={getNum}>#</button>
//                 <button type="button" className='Button' value={'$'} onClick={getNum}>$</button>
//                 <button type="button" className='Button' value={'%'} onClick={getNum}>%</button>
//                 <button type="button" className='Button' value={'^'} onClick={getNum}>^</button>
//                 <button type="button" className='Button' value={'&'} onClick={getNum}>&</button>
//                 <button type="button" className='Button' value={'*'} onClick={getNum}>*</button>
//                 <button type="button" className='Button' value={'='} onClick={getNum}>=</button>
//                 <button type="button" className='DelButton' onClick={delCalc}>Del</button>
//                 <button type="button" className='CalButton' onClick={pwCLick}>click</button>
//             </div>
//       </div>
//       </>
//     );
return(
  <div className='real_Main'>
  <Header/>
  
  <Content/>
  </div>
)
};


export default Main;