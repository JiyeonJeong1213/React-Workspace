import React from 'react';
import Children2 from './contextChildren2';
import Children3 from './contextChildren3';
// 부모컴포넌트에서 전달한 Consumer를 사용하지 않을 예정

class Children extends React.Component{
    render(){
        return(
            // 데이터를 전달하지 않고, 후손컴포넌트만 return
            //<Children2/>
            <Children3/>
        )
    }
}

export default Children;