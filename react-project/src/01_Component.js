import {Component} from 'react';
import axios from 'axios';

class ReactComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            ports : []
        }
    }

    componentDidMount(){
        axios.get("spring/test?a=1").then(
            response => {
                this.setState({ports : response.data})
            }
        );
    }

    render(){
        return(
            <h1>{this.state.ports[0]} ::: {this.state.ports[1]}</h1>
        )
    }
}

export default ReactComponent;