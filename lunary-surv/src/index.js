import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CSSReset, Flex } from '@chakra-ui/core'
import App from './App';


ReactDOM.render(
  
  <ThemeProvider>
    <CSSReset/>
    <Flex color='white' height="100em" bg='#1A202C' justify="center">
      <App />
    </Flex>
  </ThemeProvider>,
  document.getElementById('root')
);
