import React, {useState, useReducer} from 'react';
import '../css/multipleSlider.css';

const reducer = (state, action) => {
    switch(action.type) {
        case 'decrement':
            return state - 1;
        case 'increment' :
            return state + 1;
        default : 
            return state;        
            }
        }
const MultipleSlider = () => {
    const [num, setNum] = useState(0);
    const plus = () => {
        setNum(num + 1);
    }
    const minus = () => {
        setNum(num - 1);
    }
    const [number, dispatch] = useReducer(reducer, 0);

    return (
        <>
        <div>
            <h1>useState 로직 : 컴포넌트 내부에 state 업데이트 로직이 존재</h1>
            <h1>Count : {num}</h1>
            <button onClick={minus}>빼기</button>
            <button onClick={plus}>더하기</button>
        </div>

        <div>
            <h1>useReducer로직 : 컴포넌트 외부에 state 업데이트 로직이 존재</h1>
            <h1>Count : {number}</h1>
            <button onClick={() => dispatch({type: 'decrement'})}>빼기</button>
            <button onClick={() => dispatch({type: 'increment'})}>더하기</button>
        </div>

        <div>
            useReducer는 한 컴포넌트 내에서 state를 업데이트하는 로직 부분을 그 컴포넌트로부터 분리시키는 것을 가능하게 해준다는 것이다.<br/>
            분리시키는 것을 가능하게 해준다는 것은, state 업데이트 로직을 또다른 파일에 작성해서 분리, 분리된 파일을 불러와서 사용하는 것도 가능하다는 뜻도 된다.<br/>
            useReducer VS useState <br/>
            useReducer, useState 둘다 state를 변경하고 관리할 떄 사용할 수 있다는 것을 알았다.<br/>
            useState 관리해야 할 state가 1개일 경우, 그 state가 단순한 숫자, 문자열 또는 boolean 값일 경우
            UseReducer 관리해야 할 state가 1개 이상, 복수일 경우, 혹은 현재 단일 state값만 고나리하지만, 추후 유동적일 가능성이 있는 경우, 스케일이 큰 프로젝트 경우, state의 구조가 복잡해질 것으로 보이는 경우
            reducer : state를 업데이트 하는 역활
            dispatch : state 업데이트를 위한 요구
            action : 요구의 내용



        </div>
        </>
    );
};

export default MultipleSlider;