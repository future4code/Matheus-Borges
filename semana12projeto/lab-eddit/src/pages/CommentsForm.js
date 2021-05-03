import React, { useState } from 'react'
import { Box, Center, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import useForm from '../hooks/useForm'
import {Comments} from '../services/posts'
import { useToast } from "@chakra-ui/react"




const CommentsForme = ({postComments}) => {
    const [form, onChange, clear] = useForm({ text: ""})

    const toast = useToast()

    
    const onSubmitForm = (event) => {
        event.preventDefault()
        Comments(form, clear, toast, postComments)
    }

    return (
        <Box borderRadius='10px' mt='5' mb='20' w='50%' bg='brand.500'>
              <Center>
                <Text as="em" mt='5' fontSize='large' size='md' color='brand.100'><b>Comentário</b></Text>
              </Center>
              <Center>
                <Input
                w='80%'
                bg='brand.900'
                autoFocus
                isRequired
                mt='3' p='2' 
                color='white'
                name={'email'}
                value={form.email}
                onChange={onChange} 
                focusBorderColor="brand.100" 
                color='white'
                border='2px' 
                borderColor='brand.300' 
                type="text" />
              </Center>
              <Center>
                <Button
                onClick={onSubmitForm}
                cursor='pointer'
                as="em"
                mt='4'
                mb='2'
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
                    Enviar
                </Button>
              </Center>
        </Box>
    )
  }
  
  export default CommentsForme
  