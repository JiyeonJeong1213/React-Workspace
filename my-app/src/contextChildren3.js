import React from 'react';
import { Consumer } from './08_Context';

class Children3 extends React.Component{
    render(){
        return(
            <Consumer>
                {
                    (contextValue) => 
                        // 부모컴포넌트의 setStateFunc호출. 이때 this에 들어가있는 값은 부모요소의 this로 바인딩해두었음
                        <button onClick={() => contextValue.setStateFunc("부모요소변경테스트")}>
                            contextValue.name ::: {contextValue.name} 
                            {/* 중괄호 쓰는 이유는 JSX문법 안에서 자바스크립트를 사용할 때 씀 */}
                        </button>
                    
                }
            </Consumer>
        )
    }
}

export default Children3;