import React from 'react';
import prototype from "prop-types";


class App extends React.Component{  
  state = {
    isLoading: true
  }
  componentDidMount(){
    setTimeout(()=>{ //JS
      this.setState({isLoading: false});
    }, 2000);
  }
  render(){
    const{isLoading} = this.state;
  return     <div>       {this.state.isLoading?         "Loading..." : "We are ready"}   </div>
  }


}
export default App;
