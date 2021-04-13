import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import {Center} from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function AdminHomePage() {
  return (
    <ChakraProvider>
      <Center>
        <p>AdminHomePage</p>
      </Center>
    </ChakraProvider>
  );
}

export default AdminHomePage;
