import React from "react";
import { render } from "@testing-library/react";

class Detail extends React.Component{
    componentDidMount(){        
        const {location, history} = this.props;
        if(location.state === undefined){ 
            //무비 디테일이 언디파인이면 리다이렉트로 홈화면(/)으로 이동한다.
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        } else {
            return null; // null을 반환하여 리다이렉트로 홈화면으로 이동하게 만든다.
        }
    }
}

export default Detail;