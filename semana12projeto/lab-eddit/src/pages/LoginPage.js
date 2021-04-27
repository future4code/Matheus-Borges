import React, { useState } from 'react'
import { Box, Center } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToFeed, goToSignUp } from "../routes/coordinator"


const LoginPage = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const history = useHistory() 



    return (
      <Box minH='563px' bg='brand.600'>
        <Center>
          <FormControl mt='10' w='47%' isRequired id="login">
            <FormLabel mt='5' p='2' color='white'>E-mail</FormLabel>
              <Input
              focusBorderColor="brand.100" 
              color='white' 
              borderColor='brand.300' 
              type="email" />
            <FormLabel p='2' color='white'>Senha</FormLabel>
            <InputGroup size="md">
              <Input
              focusBorderColor="brand.100" 
              color='white'
              borderColor='brand.300' 
              pr="4.5rem"
              type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <IconButton _hover={'none'} _active={'none'} bg='brand.500' h="1.75rem" size="lg" onClick={handleClick}>
                  {show ? <ViewOffIcon color='brand.100' /> : <ViewIcon color='brand.100'/>}
                </IconButton>
              </InputRightElement>
            </InputGroup>
            <FormHelperText
            color='brand.100' 
            cursor='pointer'
            p='1' 
            onClick={() => goToFeed(history)}>
              Esqueceu seu e-mail ou senha?
            </FormHelperText>
              <Center>
                <Button
                cursor='pointer'
                as="em"
                type='submit'
                mt='4'
                color='brand.100'
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                variant='outline'
                borderColor='brand.100'
                _hover={{ bg: "brand.300" }} 
                _active={{
                  bg: "brand.400",
                  transform: "scale(0.98)",
                }}
                _focus={{
                  boxShadow:
                  "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                >Log in</Button>
              </Center>
          </FormControl>
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
  