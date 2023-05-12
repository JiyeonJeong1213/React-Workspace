import {Component} from 'react';
import axios from 'axios';
// C:\React-Workspace\my-app>npm install --save axios

class AxiosGet extends Component {

    componentDidMount(){
        axios.get("http://date.jsontest.com/").then(response => {alert("axiosGet"+response.data.date)});
        /*
            get() : get방식으로 http호출. url호출이 완료되면 then()함수가 실행됨
            then() : 호출결과로 response데이터가 반환되며, response와 변수명 사이에 data를 붙이면 변수를 사용할 수 있음
        */
    }

    render(){
        return(
            <h1>axios Get</h1>
        )
    }
}

class AxiosPost extends Component {

    componentDidMount(){
        axios.post("http://date.jsontest.com",
            {a:1, b:2}
        ).then((response) => {alert("axiosPost"+response.data.date)});
    }
    /*
        post("호출url", json데이터) : get()과 사용방법이 거의 비슷하며 json데이터는 body영역에 담겨서 전송됨
    */

    render(){
        return(
            <h1>axios Post</h1>
        )
    }
}

export {AxiosGet, AxiosPost};