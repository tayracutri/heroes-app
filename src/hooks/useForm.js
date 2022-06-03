import { useState } from 'react'

export const useForm = (initState = {}) => {

    const [values, setformState] = useState(initState)

    const reset = () => {
        setformState(initState);
    }
    const handleInputChange = ({ target }) => {

        setformState({
            ...values,
            [target.name]: target.value
        })
    }

    return [
        values, handleInputChange, reset
    ]
}