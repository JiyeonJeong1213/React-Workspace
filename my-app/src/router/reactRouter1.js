import React from 'react';
import { Link } from 'react-router-dom';

class ReactRouter extends React.Component{

    render(){
        return(
            <>
                <h1>path="/"</h1>
                <h3>ReactRouter 컴포넌트</h3>
                <Link to={'/reactRouter2'}>이동하기</Link>
            </>
        )
    }
}

export default ReactRouter;