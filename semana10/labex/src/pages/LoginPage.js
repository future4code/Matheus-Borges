import React, {useState} from 'react'
import { Center } from "@chakra-ui/react"
import { Input, InputGroup, InputRightElement, Button, IconButton, Heading, Box } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToLastPage } from '../routes/coodinator'
import axios from 'axios'
import { useRequestDataPost } from '../Hooks/useRequestData'


const LoginPage = () => {
  const [show, setShow] = useState(false)

  
  const history = useHistory();

  const handleMostrarSenha = () => setShow(!show)

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const inputFazerLogin = (event) => {
    useRequestDataPost('/login')
  }

  return (
    <Box>
      <Center>
        <Heading marginTop='200px'
        bgGradient={[
          "linear(to-tr, teal.300,orange.200)",
          "linear(to-t, blue.200, teal.500)",
          "linear(to-b, #009CD0, yellow.300)",
        ]}
        bgClip="text"
        >Login
        </Heading>
      </Center>
        <Center>
          <Input
          value={email}
          onChange={handleEmail} 
          type='email' 
          variant="flushed" 
          placeholder="E-mail" 
          marginTop='50px' 
          w='400px' 
          borderRadius='10px'
          borderColor='#009CD0'
          />        
        </Center>
        <Center>
          <InputGroup size="md" w='400px' marginTop='20px'>
            <Input
              value={password}
              onChange={handlePassword} 
              color='white'
              variant="flushed"
              type={show ? "text" : "password"}
              placeholder="Senha"
              borderRadius='10px'
              borderColor='#009CD0'
            />
              <InputRightElement width="4.5rem">
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
                h="1.75rem" 
                w='65px' 
                size="sm" 
                onClick={handleMostrarSenha}>
                  {show ? "Esconder" : 'Mostrar'}
                </Button>
              </InputRightElement>
          </InputGroup>
        </Center>
        <Center 
        marginTop='20px' 
        marginLeft='500px' 
        w='350px' 
        justifyContent='space-around'
        > 
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
          onClick={() => goToLastPage(history)}>Voltar
          </Button>

          <Button
          onClick={inputFazerLogin}
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
          }}>Fazer Login
          </Button>
        </Center>
    </Box>
  );
}

export default LoginPage;
