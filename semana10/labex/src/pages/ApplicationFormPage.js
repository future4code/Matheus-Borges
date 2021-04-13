import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { Center } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"

function ApplicationFormPage() {
  return (
    <ChakraProvider>
      <Center>
        <p>ApplicationFormPage</p>
      </Center>
    </ChakraProvider>
  );
}

export default ApplicationFormPage;
