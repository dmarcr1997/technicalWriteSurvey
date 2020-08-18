import React, {Component} from 'react';
import lunary from './lunLogo.png';
import { Box, Image, ControlBox, Icon, VisuallyHidden } from "@chakra-ui/core";
class Form extends Component{
    state = {

    
    }



    render(){
        return(
            <Box size='lg' rounded="lg" overflow="hidden">
                <Box size='md' alignItems="center">
                    <Image src={lunary} alt="Lunary Designs Logo" />
                </Box>
                <Box size='md' alignItems="center">
                    <label>
                        <VisuallyHidden as="input" type="checkbox" defaultChecked />
                        <ControlBox
                            borderWidth="1px"
                            size="24px"
                            rounded="sm"
                            _checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
                            _focus={{ borderColor: "green.600", boxShadow: "outline" }}
                        >
                            <Icon name="check" size="16px" />
                        </ControlBox>

                        <Box as="span" verticalAlign="top" ml={3}>
                            Checkbox Label
                        </Box>
                    </label>
                </Box>
            </Box>
        )
    }
}

export default Form
