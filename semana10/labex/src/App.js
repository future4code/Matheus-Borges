import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Image, Square, Box } from "@chakra-ui/react"
import {theme} from './constants/Theme'
import Router from './routes/Router'
import image_estrelas from './Assets/Images/estrelas-ceu.png'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Square 
      w="100%"
      h='625px'
      bgGradient={[
        "linear(to-tr, teal.100,#E9C5C7)",
        "linear(to-t, #FEEFF6, teal.400)",
        "linear(to-b, #090954, #00A1D7)",
      ]}
      >
      <Image src={image_estrelas} w='50px' objectFit="cover" alt="estrelas" />
      <Router  />
      <footer>

      </footer>
      </Square>
    </ChakraProvider>
  );
}

export default App;
