import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Box } from "@chakra-ui/react"
import {theme} from './constants/Theme'
import Router from './routes/Router'


const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box 
      w="100%"
      bgGradient={[
        "linear(to-tr, teal.100,#E9C5C7)",
        "linear(to-t, #FEEFF6, teal.400)",
        "linear(to-b, black, #090954)",
      ]}
      >
        
      <Router  />
      <footer>

      </footer>
      </Box>
    </ChakraProvider>
  );
}

export default App;
