import React from 'react'
import SignUpForm from './SignUpForm'
import { Box, Center, Heading } from '@chakra-ui/layout'
import { useHistory } from "react-router-dom"
import useUnProtectedPage from '../hooks/useUnProtectedPage'

const SignUpPage = ({setButtonLog}) => {
  useUnProtectedPage()

  const history = useHistory() 


    return (
      <Box minH='563px' bg='brand.600'>
          <Center>
            <Heading mt='2' color='brand.100' as="em" size="xl">Cadastre-se e divirta-se</Heading>
          </Center>
        <Center>
          <SignUpForm setButtonLog={setButtonLog}/>
        </Center>
      </Box>
    )
  }
  
  export default SignUpPage