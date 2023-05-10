import {Component} from 'react';

class PropNode extends Component{
    render(){
        return(
            <div style={{padding:"0px"}}>
                {this.props.children} 
                {/* 부모로 부터 전달받은 html노드요소 받아오는 법 props.children */}
            </div>
        )
    }
}

export default PropNode;