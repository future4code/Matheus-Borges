import axios from 'axios'
import { Url_Base } from '../constants/Urls'
import { goToFeed } from "../routes/coordinator"
import { CgLogOut } from 'react-icons/cg';


export const login = (body, clear, toast, history, setButtonLog) => {

    axios.post(`${Url_Base}/login`, body)
    .then((res) => {
        localStorage.setItem('token', res.data.token)
        toast({
            title: `Login feito com sucesso!`,
            variant: 'left-accent',
            status: 'success',
            description: `Seja Bem-Vindo(a) ${res.data.user.username}!`,
            duration: 5000,
            position:"bottom-right",
            isClosable: true,
          })
          clear()
          goToFeed(history)
          setButtonLog(<CgLogOut color='brand.100'/>)
    })
    .catch((err) => {
        toast({
            title: `Erro ao fazer Login!`,
            description: `${err.response.data.message}!`,
            duration: 3000,
            status: 'error',
            variant: 'left-accent',
            position:"bottom-left",
            isClosable: true,
        })
    })
}

export const signUp = (body, clear, toast, history, setButtonLog) => {

    axios.post(`${Url_Base}/signup`, body)
    .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.token)
        toast({
            title: `Cadastro feito com sucesso!`,
            variant: 'left-accent',
            status: 'success',
            description: `Seja Bem-Vindo(a) ${res.data.user.username}!`,
            duration: 5000,
            position:"bottom-right",
            isClosable: true,
          })
          clear()
          goToFeed(history)
          setButtonLog(<CgLogOut color='brand.100'/>)
    })
    .catch((err) => {
        toast({
            title: `Erro ao fazer Cadastro!`,
            description: `${err.response.data.message}!`,
            duration: 3000,
            status: 'error',
            variant: 'left-accent',
            position:"bottom-left",
            isClosable: true,
        })
    })
}
