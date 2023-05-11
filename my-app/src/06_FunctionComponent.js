/*
    함수형 컴포넌트
    return값이 있는 function과 동일한 구조의 컴포넌트

    (전역변수를 선언할 수 있는)state가 없고, 생명주기함수(constructor, render,...)를 사용할 수 없음
    부모컴포넌트에게 props와 context를 파라미터로 전달받아 사용하고,
    render함수가 없기 때문에 return만 사용하여 화면을 그려줌

    함수형 컴포넌트에서 state와 생명주기함수의 기능을 사용해야 하는 경우 hook을 추가함

    대표적인 hook함수
    1) useState() : state변수값을 선언하게 해주는 메서드
    2) userEffect() : 생명주기 함수 중 componentDidMount와 동일한 역할을 함
*/

import { useState, useEffect } from "react";

function FunctionComponent(props){

    const [stateString, setString]=useState('react');
    /*
        useState메서드는 길이 2짜리 배열을 반환해줌. 이를 구조분해할당으로 이용하여 반환된 값을 저장
        반환된 값을 담아줄 첮번째 인자(stateString) : state의 변수명 (state.stateString)
        반환된 값을 담아줄 두번째 인자(setString) : stateString값을 변경해주는 함수를 저장(setState()와 비슷한 역할) / 값이 다를때만 실행됨(pureComponent처럼)
    */

    useEffect(() => {
        console.log("useEffect 테스트");
    });
    /*
        userEffect는 생명주기함수 중 componentDidMount와 동일한 기능을 수행함
        return되는 html코드들이 화면에 그려진 후 (렌더링완료 된 후) 실행됨
        최초 페이지 로딩될 때 한번 실행되고, setString()함수로 state값이 변경되면 다시한번 랜더링 되면서 랜더링 완료 후 재실행됨
    */

    return(
        <div style={{padding:"0px"}}>
            <h2>
                {stateString}
            </h2>
            <button onClick={()=>setString('setContents테스트')}>클릭</button>
        </div>
    )
}

export default FunctionComponent;