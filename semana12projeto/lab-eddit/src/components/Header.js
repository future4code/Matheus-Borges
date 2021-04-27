import React from 'react'
import { Box, Center, Flex, Heading, Spacer } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import logo from '../assets/Images/astrobot.png'
import { useHistory } from "react-router-dom"
import { goToLogin, goToFeed } from "../routes/coordinator"


const Header = () => {

    const history = useHistory()


    return (
        <Flex p='2' bg="brand.500" w='100%'>
            <Center
            ml='6' 
            cursor='pointer' 
            p='2'
            as='button'
            onClick={() => goToFeed(history)}
            >
                <Image
                borderRadius="full"
                boxSize="30px" 
                src={logo} />
                <Heading ml="1" color='brand.100' size="md">Lab</Heading>
                <Heading color='white' size="md">eddit</Heading>
            </Center>
                <Heading mt='3' ml='-1' color='#A4A4A4' size='xs'>ᴮᴿ</Heading>
            <Spacer />
            <Box>
                <Button
                cursor='pointer'
                as="em" 
                onClick={() => goToLogin(history)}
                mt='0.5' 
                mr='2' 
                color='brand.100'
                lineHeight="1.2"
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _hover={{ bg: "brand.300" }} 
                _active={{
                    bg: "brand.400",
                    transform: "scale(0.98)",
                }}
                _focus={{
                boxShadow:
                    "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                }}
                variant='ghost'>
                    Log in
                </Button>
            </Box>
        </Flex>
    )
  }
  
  export default Header
  