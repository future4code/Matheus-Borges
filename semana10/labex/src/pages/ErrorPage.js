import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"


function ErrorPage() {
  return (
    <ChakraProvider>
      <Center>
        <p>Error 404</p>
      </Center>
    </ChakraProvider>
  );
}

export default ErrorPage;
