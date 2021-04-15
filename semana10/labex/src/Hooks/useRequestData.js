import { useState, useEffect } from "react";
import axios from "axios";
import { Base_Url } from '../constants/Urls'

export const useRequestData = (endpoint, inicialState) => {
    const [data, setData] = useState(inicialState);


    useEffect(() => {
        axios
            .get(`${Base_Url}${endpoint}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (data)
}
