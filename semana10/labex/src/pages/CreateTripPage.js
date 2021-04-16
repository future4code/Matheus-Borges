import React from 'react'
import { Box, Center, Heading, Button } from "@chakra-ui/react"
import { useHistory } from 'react-router'
import { useProtectedPage } from '../Hooks/useProtectedPage'


const CreateTripPage = () => {
  useProtectedPage()
  const history = useHistory()

  const logout = () => {
    window.localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <Box h='625px'>
      <Center>
      <Heading
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text" 
        >
          Crie sua Viagem
        </Heading>
      </Center>
        <Button
          variant='outline'
          color='white'
          borderColor='white'
          bgGradient={[
            "linear(to-b, teal.100,#E9C5C7)",
            "linear(to-t, #FEEFF6, teal.400)",
            "linear(to-tr, #009CD0, #090954)",
          ]}
          _hover={{
            borderColor:'#009CD0'
          }}
          _active={{
            bg:'#009CD0'
          }}  
          marginLeft='1200px' 
          marginTop='-65px' 
          onClick={logout}>
            Logout
        </Button>
    </Box>
  );
}

export default CreateTripPage;
