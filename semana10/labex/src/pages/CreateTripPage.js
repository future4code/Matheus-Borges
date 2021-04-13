import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function CreateTripPage() {
  return (
    <ChakraProvider>
      <Center>
        <p>CreateTripPage</p>
      </Center>
    </ChakraProvider>
  );
}

export default CreateTripPage;
