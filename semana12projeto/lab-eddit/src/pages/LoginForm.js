import React, { useState } from 'react'
import { Box, Center, Flex, Text } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom"
import { goToSignUp } from "../routes/coordinator"
import useForm from '../hooks/useForm'
import {login} from '../services/labEddit'
import { useToast } from "@chakra-ui/react"




const LoginForm = ({setButtonLog}) => {
    const [form, onChange, clear] = useForm({ email: "", password: "" })

    const toast = useToast()

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    
    const history = useHistory() 
    
    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clear, toast, history, setButtonLog)
    }

    return (
        <Box w='50%'>
              <Flex>
                <Text as="em" mt='5' fontSize='large' size='md' color='white'><b>E-mail</b> </Text>
                <Text mt='5' color='red'>*</Text>
              </Flex>
              <Input
              isRequired
              mt='3' p='2' 
              color='white'
              name={'email'}
              value={form.email}
              onChange={onChange} 
              focusBorderColor="brand.100" 
              color='white' 
              borderColor='brand.300' 
              type="email" />
              <Flex>
                <Text as="em" mt='5' fontSize='large' size='md' color='white'><b>Senha</b> </Text>
                <Text mt='5' color='red'>*</Text>
              </Flex>
            <InputGroup size="md">
              <Input
              mt='3'
              name={'password'}
              value={form.password}
              onChange={onChange} 
              focusBorderColor="brand.100" 
              color='white'
              borderColor='brand.300' 
              pr="4.5rem"
              type={show ? "text" : "password"}
              />
              <InputRightElement width="4.5rem">
                <IconButton mt='6' _hover={'none'} _active={'none'} bg='brand.500' h="1.75rem" size="lg" onClick={handleClick}>
                  {show ? <ViewOffIcon color='brand.100' /> : <ViewIcon color='brand.100'/>}
                </IconButton>
              </InputRightElement>
            </InputGroup>
                <Text
                color='brand.100' 
                cursor='pointer'
                p='1' 
                onClick={() => goToSignUp(history)}>
                    Esqueceu seu e-mail ou senha?
                </Text>
              <Center>
                <Button
                onClick={onSubmitForm}
                cursor='pointer'
                as="em"
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
                }}>
                    Log in
                </Button>
              </Center>
        </Box>
    )
  }
  
  export default LoginForm
  