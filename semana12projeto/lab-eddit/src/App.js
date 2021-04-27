import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router'
import theme from './constants/Theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router/>
    </ChakraProvider>
  )
}

export default App
