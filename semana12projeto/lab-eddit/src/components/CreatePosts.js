import { Button, ButtonGroup, IconButton } from '@chakra-ui/button'
import { useDisclosure } from '@chakra-ui/hooks'
import { AddIcon } from '@chakra-ui/icons'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger } from '@chakra-ui/popover'
import React, {useRef} from 'react'
import  FocusLock from "react-focus-lock"
import useForm from '../hooks/useForm'
import {posts} from '../services/posts'
import { Input, useToast } from "@chakra-ui/react"



const CreatePosts = () => {
    
    const FormPosts = ({ onCancel }) => {
        const [form, onChange, clear] = useForm({ text: "", title: "" })
        const toast = useToast()
        
        const onSubmitForm = (event) => {
            event.preventDefault()
            posts(form, clear, toast )
        }
            

        return (
                <Stack color='brand.100' bg='brand.600' borderColor='black' spacing={4}>

                <label><b>Título</b></label>

                <Input
                autoFocus
                focusBorderColor="brand.100"
                borderColor='brand.300' 
                color='white' 
                bg='#121212' 
                name={'text'}
                value={form.text}
                onChange={onChange}
                />

                <label><b>Texto</b></label>

                <Input
                focusBorderColor="brand.100"
                borderColor='brand.300'
                color='white'
                bg='#121212'
                h='20'
                name={'title'}
                value={form.title}
                onChange={onChange}
                />
                <ButtonGroup 
                d="flex" 
                justifyContent="flex-end">
                    <Button 
                    margin='2' 
                    color='white' 
                    _hover={{bg:'red'}} 
                    bg='red' 
                    variant="outline" 
                    onClick={onCancel}>
                    Fechar
                    </Button>
                    <Button 
                    onClick={onSubmitForm} 
                    margin='2' color='white' 
                    _hover={{bg:'brand.100'}} 
                    bg="brand.100">
                    Postar
                    </Button>
                </ButtonGroup>
                </Stack>
            )
        }
        const { onOpen, onClose, isOpen } = useDisclosure()
        const firstFieldRef = useRef(null)
      
        return (
          <Box  position='fixed'>
            <Box color='brand.100' d="inline-block" mr={1}>
              <Text><b>Posts</b></Text>
            </Box>
            <Popover
              isOpen={isOpen}
              initialFocusRef={firstFieldRef}
              onOpen={onOpen}
              onClose={onClose}
              placement="right"
              closeOnBlur={false}
            >
              <PopoverTrigger>
                <IconButton
                _hover={{bg:'brand.100'}} 
                bg='brand.100' 
                size="sm" 
                icon={<AddIcon />} />
              </PopoverTrigger>
              <PopoverContent 
              p={7} 
              borderColor='brand.100' 
              bg='brand.600' w={60}>
                <FocusLock 
                returnFocus persistentFocus={false}>
                  <PopoverCloseButton 
                  onCancel={onClose} 
                  bg='brand.100' />
                  <PopoverArrow 
                  bg='brand.600' />
                  <FormPosts 
                  bg='brand.600' 
                  firstFieldRef={firstFieldRef} 
                  onCancel={onClose}/>
                </FocusLock>
              </PopoverContent>
            </Popover>
          </Box>
        )
      }

export default CreatePosts