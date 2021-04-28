import React from 'react'
import { IconButton } from '@chakra-ui/button'
import { HamburgerIcon, 
    AddIcon, 
    ChatIcon, 
    SettingsIcon, 
    QuestionOutlineIcon, 
    MoonIcon, 
    BellIcon 
    } from '@chakra-ui/icons'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
    } from "@chakra-ui/react"
import { CgLogOut } from 'react-icons/cg'
import { VscFeedback } from "react-icons/vsc"
import { useHistory } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"
import { useToast } from "@chakra-ui/react"



const MenuIten = () => {
    
    const token = localStorage.getItem('token')
    
    const toast = useToast()
    
    const logout = () => {
        localStorage.removeItem('token')
        goToLogin(history)
        {toast({
            title: `Logout feito com sucesso!`,
            variant: 'solid',
            status: 'success',
            description: ``,
            duration: 1000,
            position:"bottom-left",
            isClosable: true,
        })}
    }
    const history = useHistory()
    

    return(
            <Menu>
                <MenuButton
                    mt='-90px'
                    as={IconButton}
                    aria-label="Options"
                    icon={<HamburgerIcon w={7} h={7} color='white' />}
                    variant='ghost'
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{ bg: "brand.300" }} 
                    _active={{
                        bg: "brand.400",
                        transform: "scale(0.98)",
                    }}
                />
                    <MenuList color='black' bg='#D9DDE0'>
                        <MenuItem  _hover={{ bg: "brand.100" }} icon={<AddIcon />} command="⌘L">
                            Post
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<ChatIcon />} command="⌘A">
                            Chat
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<BellIcon />} command="⌘B">
                            Notific...
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<MoonIcon/>} command="⌘E">
                            Exibição
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<QuestionOutlineIcon/>} command="⌘D">
                            Ajuda
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<VscFeedback/>} command="⌘D">
                            Feedba...
                        </MenuItem>
                        <MenuItem _hover={{ bg: "brand.100" }} icon={<SettingsIcon />} command="⌘I">
                            Config...
                        </MenuItem>
                        <MenuItem onClick={logout} _hover={{ bg: "brand.100" }} icon={<CgLogOut />} command="⌘T">
                            Logout
                        </MenuItem>
                    </MenuList>
            </Menu>
    )
}

export default MenuIten