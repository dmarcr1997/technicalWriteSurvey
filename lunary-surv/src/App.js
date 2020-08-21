import React, {Component} from 'react';
import { Stack } from "@chakra-ui/core";
import Form from './form';
import AIcomms from './AIcomms';
class App extends Component{
  state = {
    Question1: '',
    Question2: '',
    Question3: '',
    Question4: '',
  }

  getFeedback = (event) => {
    let newDat
    let fb = event.target.value
    let name = event.target.name
    switch(fb){
      case "A":
        newDat = [1,1]
        break
      case "B":
        newDat = [0,1]
        break
      default:
        newDat = [0,0]
        break
    }

    this.setState({
      [`${name}`]: newDat
    })
  }

  render(){
    let {Question1, Question2, Question3, Question4} = this.state
    let data = [Question1, Question2, Question3, Question4] 
    debugger
    return (
      <>
        <Stack justify='center' spacing={400}>
          <Stack size='2xl'>
            <Form handleClick={this.getFeedback}/>
          </Stack>
          <Stack>
            <AIcomms data={data}/>
          </Stack>
        </Stack>
      </>
    );
  }
}

export default App;
