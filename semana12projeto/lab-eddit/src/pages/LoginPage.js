import React from 'react'
import { Box, Center } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../routes/coordinator"
import LoginForm from './LoginForm'
import useUnProtectedPage from '../hooks/useUnProtectedPage'


const LoginPage = ({setButtonLog}) => {
  useUnProtectedPage()

  const history = useHistory() 

    return (
      <Box minH='563px' bg='brand.600'>
        <Center>
          <LoginForm setButtonLog={setButtonLog}/>
        </Center>
        <Center>
            <Button
            cursor='pointer'
            as="em"
            onClick={() => goToSignUp(history)} 
            mt='4' 
            variant='text' 
            color='brand.100'>
              Não possui conta? Cadastre-se.
            </Button>
        </Center>
      </Box>
    )
  }
  
  export default LoginPage
  