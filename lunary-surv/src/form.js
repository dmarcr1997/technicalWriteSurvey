import React, {Component} from 'react';
import lunary from './lunLogo.png';
import {Textarea, Text, Box, Image, Stack, Checkbox, Button } from "@chakra-ui/core";
class Form extends Component{
    state = {
        feedback: {
            Question1: '',
            Question2: '',
            Question3: '',
            Question4: '',
            Question5: ''
        }
    
    }


    render(){
        return(
            <Box width='100%' size='xl' rounded="lg" alignItems='center' justify='center'>
                <Box size='xl'>
                    <Image size='xl' src={lunary} alt="Lunary Designs Logo" />
                </Box>
                <Box size='xl'>
                    <Text fontSize='lg'>Is your Website Similar to what you had in mind: </Text>
                    <Stack alignItems='center' spacing={10} isInline>
                        <Checkbox size='sm' variantColor="green">
                            Yes, it is Awesome
                        </Checkbox>
                        <Checkbox size='sm' variantColor="green">
                            Its, ok  
                        </Checkbox>
                        <Checkbox size='sm' variantColor="green">
                            No I hate it
                        </Checkbox>
                    </Stack>
                    <Text fontSize='lg'>How well did we communicate during the creation process: </Text>
                    <Stack spacing={10} isInline>
                        <Checkbox size='sm' variantColor="green">
                            Amazing. We Talked through every feature
                        </Checkbox>
                        <Checkbox size='sm' variantColor="green">
                          Ok, I felt like you could have done better 
                        </Checkbox>
                        <Checkbox size='sm' variantColor="green">
                            Horrible, I was left out of everything
                        </Checkbox>
                    </Stack>
                    <Text fontSize='lg'>Do you feel like you had control over your website: </Text><br/>
                    <Textarea color='black' placeholder='Enter Thoughts Here'/><br/>
                    <Text fontSize='lg'>Would you recommend this service to other people</Text><br/>
                    <Textarea color='black' placeholder='Enter Comments and Experience Here'/><br/>
                    <Text fontSize='lg'>Was there anything we missed _____________________</Text><br/>
                    <Textarea color='black'/><br/>
                </Box>

                <Button variantColor='green'>Submit Survey</Button>
            </Box>
        )
    }
}

//https://www.wolframcloud.com/obj/dmarcr1997/SurveySentament?feedback=%22Hello%22 api call

export default Form
