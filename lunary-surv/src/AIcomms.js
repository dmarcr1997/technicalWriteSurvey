import React from 'react'
import { Button, useToast } from "@chakra-ui/core";
import brain from 'brain.js';
import data from './getData';
const AIcomms = (props) => {
   const toast = useToast();
   const net = new brain.recurrent.LSTM()
   net.train(data, {
        iterations: 100,
        errorThresh: 0.01,
        log: (error) => {
            console.log(error)
            props.send(error)
        }
    })
    let sum = 0
    let prevNum = 0
    let count = 0
    let dat = Object.values(props.data)
    let message
    let num
    for(let i = 0; i < dat.length; i++){
        num = parseInt(net.run(dat[i]))
        while (isNaN(num)){
            num = net.run(dat[i]).replace(/\D/g,'');
           
        }
        sum += parseInt(num)
        count+=1
    }
    debugger
    if ((sum/count) > 1){
        message = "Thanks For Your Feedback!!"
    } else {
        message = "I am sorry we did not satisfy your needs.\nContact us at lunary_support@lunary.com if you would like us to fix anything now"
    }
    
    return(
        <>
            <Button size='md' variantColor='orange' color='white' onClick={() => {
                toast({
                    title: "Feedback Sent",
                    description: message,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
                props.newForm()}
            }>Send Feedback</Button>
        </>
    )
}

export default AIcomms