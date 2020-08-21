import React, {Component} from 'react';
import { Progress } from "@chakra-ui/core";
import Form from './form';
import AIcomms from './AIcomms';
class App extends Component{
  state = {
    feedback: [],
    submit: false, 
    loading: false,
    loadBar: 0
  }

  getFeedback = (feedback) => {
    this.setState({
      feedback,
      submit: true
    })
  }

  toggle = () => {
    let newSub = !this.state.submit
    this.setState({
      feedback: [],
      submit: newSub,
      loading: true
    })
  }

  loading = (iter) => {
    
    let prog = (parseInt(iter[12])/200)*100
    console.log(prog)
    let load = this.state.loading
    if (prog >= 100){
      load = false
    }
    this.setState({
      ...this.state,
      loading: load,
      loadBar: prog
    })
  }

  getContent = () => {
    if (this.state.submit === false){
      return(<Form submit={this.getFeedback}/>)
    } else {
      return(
        <>
          <Progress hasStripe isAnimated value={this.state.loadBar} />
          <AIcomms send={this.loading} data={this.state.feedback} newForm={this.toggle}/>
        </>
      )

    }
  }

  render(){
    return (
      <>
        {this.getContent()}
       
      </>
    );
  }
}

export default App;
