import React, { useState } from 'react'
import { Box, Center, Flex } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import { Text } from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import useForm from '../hooks/useForm'
import {signUp} from '../services/labEddit'
import { useToast } from "@chakra-ui/react"


const SignUpForm = ({setButtonLog}) => {
    const [form, onChange, clear] = useForm({username: '', email: '', password: ''})

    const toast = useToast()

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const history = useHistory() 

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, toast, history, setButtonLog)
}

    return (
        <Box w='50%'>
              <Flex>
                <Text as="em" mt='5' fontSize='large' size='md' color='white'><b>Apelido</b> </Text>
                <Text mt='5' color='red'>*</Text>
              </Flex>
            <Input
            isRequired
            name={'username'}
            value={form.username}
            onChange={onChange} 
            focusBorderColor="brand.100" 
            color='white' 
            borderColor='brand.300'  />
              <Flex>
                <Text as="em" mt='5' fontSize='large' size='md' color='white'><b>E-mail</b> </Text>
                <Text mt='5' color='red'>*</Text>
              </Flex>
            <Input
            isRequired
            name={'email'}
            value={form.email}
            onChange={onChange}
            focusBorderColor="brand.100" 
            color='white' 
            borderColor='brand.300'  />
              <Flex>
                <Text as="em" mt='5' fontSize='large' size='md' color='white'><b>Senha</b> </Text>
                <Text mt='5' color='red'>*</Text>
              </Flex>
            <InputGroup isRequired size="md">
                <Input
                isRequired
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
            <IconButton _hover={'none'} _active={'none'} bg='brand.500' h="1.75rem" size="lg" onClick={handleClick}>
                        {show ? <ViewOffIcon color='brand.100' /> : <ViewIcon color='brand.100'/>}
                      </IconButton>
              </InputRightElement>
            </InputGroup>
            <Center>
                <Button
                onClick={onSubmitForm}
                cursor='pointer'
                as="em"
                mt='6'
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
                >Cadastrar</Button>
              </Center>
        </Box>
    )
  }
  
  export default SignUpForm