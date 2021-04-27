import React from 'react'
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Header = () => {
    return (
        <Flex p='2'>
        <Box p="2">
            <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <Box>
            <Button colorScheme="teal" mr="4">
            Cadastrar
            </Button>
            <Button colorScheme="teal">Log in</Button>
        </Box>
        </Flex>
    )
  }
  
  export default Header
  