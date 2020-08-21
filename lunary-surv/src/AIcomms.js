import React from 'react'
import { Button, useToast, Text, Stack } from "@chakra-ui/core";
import brain from 'brain.js';
import data from './getData';
const AIcomms = (props) => {
    debugger
    const toast = useToast();
    let renderInfo = () => {
        if (props.data.some(s => s === "")){
            return( 
            <Stack spacing={3}>
                <Text size='md' status="info">
                    Fill out the Form Above First
                </Text>
            </Stack>)
        } else {
            return(<Button width ='10em' size='sm' variantColor='green' color='white' onClick={() => {
                let message = train_and_run()
                toast({
                    title: "Feedback Sent",
                    description: message,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
            }>Send Feedback</Button>)
        }
    }
    let train_and_run = () => {     
        const net = new brain.NeuralNetwork({ hiddenLayers: [3] }); 
        net.train(data)
        let sum = 0
        let count = 4
        let message
        let dat = props.data
        debugger
        for(let i = 0; i < dat.length; i++){
            sum += (parseFloat(net.run(dat[i])))
        }
        console.log(sum/count)
        debugger
        if ((sum/count) > .90){
            message = "Thanks For Your Feedback!!"
        } else {
            message = "I am sorry we did not satisfy your needs.\nContact us at lunary_support@lunary.com if you would like us to fix anything now"
        }
        return message
    }
    return(
        <>
            {renderInfo()}            
        </>
    )
}

export default AIcomms