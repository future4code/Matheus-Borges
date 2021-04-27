import React, { useState } from 'react'
import { Box, Center, Flex, Heading } from '@chakra-ui/layout'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { Button, IconButton } from '@chakra-ui/button'
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Text
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { goToFeed } from "../routes/coordinator"

const SignUpPage = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  const history = useHistory() 


    return (
      <Box minH='563px' bg='brand.600'>
          <Center>
            <Heading mt='2' color='brand.100' as="em" size="lg">Cadastre-se e divirta-se</Heading>
          </Center>
        <Center>
          <FormControl  mt='1' w='47%' isRequired id="SignUp">
            <FormLabel p='3' color='white'>Apelido</FormLabel>
            <Input
            focusBorderColor="brand.100" 
            color='white' 
            borderColor='brand.300'  />
            <FormLabel p='3' color='white'>E-mail</FormLabel>
            <Input
            mb='8'
            focusBorderColor="brand.100" 
            color='white' 
            borderColor='brand.300'  />
            <Flex ml='2' mt='-2'>
              <Text mb="8px" color='white'>Senha</Text>
              <Text mb="8px" color='red'>*</Text>
            </Flex>
            <InputGroup isRequired size="md">
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
            <Center>
                <Button
                cursor='pointer'
                as="em"
                type='submit'
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
          </FormControl>
        </Center>
      </Box>
    )
  }
  
  export default SignUpPage