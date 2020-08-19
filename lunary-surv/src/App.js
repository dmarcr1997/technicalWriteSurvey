import React, {Component} from 'react';

import Form from './form';
class App extends Component{
  state = {
    feedback: [],
    submit: false
  }

  getFeedback = (feedback) => {
    this.setState({
      feedback,
      submit: true
    })
  }

  getContent = () => {
    if (this.state.sumbit === false){
      return(<Form submit={this.getFeedback}/>)
    } else {
      return 
    }
  }

  render(){
    return (

    );
  }
}

export default App;
