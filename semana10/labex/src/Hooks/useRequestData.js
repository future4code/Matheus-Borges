import { useState, useEffect } from "react";
import axios from "axios";
import { Base_Url } from '../constants/Urls'

export const useRequestData = (endpoint, inicialState) => {
    const [data, setData] = useState(inicialState);


    useEffect(() => {
        axios
            .get(`${Base_Url}${endpoint}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [endpoint])
    return [data, setData];
}

export const useRequestDataPost = (endpoint, inicialState) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const body = {
            email: email,
            password: password
          }
        axios
            .post(`${Base_Url}${endpoint}`, body)
            .then((res) => {
                console.log(res.data)
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [endpoint])
    return [data, setData];
}