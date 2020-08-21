import React, {Component} from 'react';
import lunary from './lunLogo.png';
import {Textarea, Text, Box, Image, Stack, Checkbox, Button } from "@chakra-ui/core";
class Form extends Component{
    state = {
        Question1: '',
        Question2: '',
        Question3: '',
        Question4: ''
    }

    handleSubmit = (event) => {
        let st = this.state
        this.props.submit(this.state)
    }

    handleClick = (event) => {
        this.setState({
            [`${event.target.name}`]: event.target.value
        })
    }

    render(){
        const vals = ["Yes, it is Awesome!", "Its, ok.", "No, I hate it.", "Amazing! We talked through every feature.", "Ok, I felt like you could have done better.",  "Horrible, I was left out of everything!", "Yes, So much", 
        "Eh a little", "No, not at all I was kept in the dark", "Yes, other small businesses should know",  "Maybe if some changes are made", " Never in my life"]
        return(
            <Box width='100%' size='xl' rounded="lg" alignItems='center' justify='center'>
                <Box size='xl'>
                    <Image size='xl' src={lunary} alt="Lunary Designs Logo" />
                </Box>
                <Box size='xl'>
                    <Text fontSize='lg'>Is your Website Similar to what you had in mind: </Text>
                    <Stack alignItems='center' spacing={10} isInline>
                        <Checkbox value={vals[0]}name='Question1' onChange={this.handleClick} size='sm' variantColor="green">
                            Yes, it is Awesome
                        </Checkbox>
                        <Checkbox value={vals[1]} name='Question1' onChange={this.handleClick} size='sm' variantColor="green">
                            Its, ok  
                        </Checkbox>
                        <Checkbox value={vals[2]}name='Question1' onChange={this.handleClick} size='sm' variantColor="green">
                            No I hate it
                        </Checkbox>
                    </Stack><br/>
                    <Text fontSize='lg'>How well did we communicate during the creation process: </Text>
                    <Stack spacing={10} isInline>
                        <Checkbox value={vals[3]} name='Question2' onChange={this.handleClick} size='sm' variantColor="green">
                            Amazing. We Talked through every feature
                        </Checkbox>
                        <Checkbox value={vals[4]} name='Question2' onChange={this.handleClick} size='sm' variantColor="green">
                          Ok, I felt like you could have done better 
                        </Checkbox>
                        <Checkbox value={vals[5]} name='Question2' onChange={this.handleClick} size='sm' variantColor="green">
                            Horrible, I was left out of everything
                        </Checkbox>
                    </Stack><br/>
                    <Text fontSize='lg'>Do you feel like you had control over your website: </Text>
                    <Stack spacing={10} isInline>
                        <Checkbox value={vals[6]} name='Question3' onChange={this.handleClick} size='sm' variantColor="green">
                            Yes, So much
                        </Checkbox>
                        <Checkbox value={vals[7]} name='Question3' onChange={this.handleClick} size='sm' variantColor="green">
                            Eh, a little
                        </Checkbox>
                        <Checkbox value={vals[8]} name='Question3' onChange={this.handleClick} size='sm' variantColor="green">
                            No, not at all I was kept in the dark
                        </Checkbox>
                    </Stack><br/>
                    <Text fontSize='lg'>Would you recommend this service to other people:</Text>
                    <Stack spacing={10} isInline>
                        <Checkbox value={vals[9]} name='Question4' onChange={this.handleClick} size='sm' variantColor="green">
                            Yes, other small businesses should know
                        </Checkbox>
                        <Checkbox value={vals[10]} name='Question4' onChange={this.handleClick} size='sm' variantColor="green">
                            Maybe if some changes are made 
                        </Checkbox>
                        <Checkbox value={vals[11]} name='Question4' onChange={this.handleClick} size='sm' variantColor="green">
                            Never in my life
                        </Checkbox>
                    </Stack><br/>
                    <Text fontSize='lg'>Was there anything we missed</Text><br/>
                    <Textarea name='Question5' color='black'/><br/>
                    <Button onClick={() => this.handleSubmit()} variantColor='green'>Submit Survey</Button>
                </Box>
            </Box>
        )
    }
}

//https://www.wolframcloud.com/obj/dmarcr1997/SurveySentament?feedback=%22Hello%22 api call

export default Form
