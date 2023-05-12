import React from 'react';
/*
    Ref ? reference의 약자. 참조변수(주소값)
    자바스크립트에서 html요소를 선택해올 때
    document.getElementById("아이디값"); 과 같은 선택함수와 같이 요소를 가져온 후 조작했음

    React에서는 위 요소에 더해서 Ref를 통해 html요소를 참조하여 조작할 수 있도록 지원함
*/

class ReactRef extends React.Component{
    
    constructor(props){
        super(props);
        this.InputRef = React.createRef(); // Ref변수 생성
    }

    RefFocus = () => {
        // 요소에 대한 정보가 current안에 할당되어있음
        //console.log(this.InputRef, this.InputRef.current);
        this.InputRef.current.focus();
    }

    // 자바스크립트방식 요소선택
    JavascriptFocus(){
        document.getElementById("id1").focus();
    }

    render(){
        return(
            <>
                {/* 
                    input요소에 ref속성을 추가하고 생성자함수 내부에 선언한 InputRef변수 할당시,
                    현재 input요소에 대한 정보를 InputRef를 통해 참조할 수 있다.
                */}
                <input id="id1" type="text" ref={this.InputRef}/>

                <input type="button" value="REF" onClick={this.RefFocus}/>

                <input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default ReactRef;