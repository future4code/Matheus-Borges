import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function LoginPage() {
  return (
    <ChakraProvider>
      <Center>
        <p>LoginPage</p>
      </Center>
    </ChakraProvider>
  );
}

export default LoginPage;
