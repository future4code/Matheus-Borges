import React, {useState} from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Router from './routes/Router'
import theme from './constants/Theme'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { CgLogOut } from 'react-icons/cg';


const App = () => {
  const token = localStorage.getItem('token')
  const [buttonLog, setButtonLog] = useState (token ? <CgLogOut color='brand.100'/> : 'Log in')

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Header buttonLog={buttonLog} setButtonLog={setButtonLog} />
        <Router setButtonLog={setButtonLog} />
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
