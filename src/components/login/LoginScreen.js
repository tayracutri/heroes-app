import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom';
import { types } from '../types/types';

export const LoginScreen = (props) => {

    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {

        dispatch({
            type: types.login,
            payload: {
                name: 'Tayra'
            },

        });

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, {
            replace: true
        })
    }

    return (
        <div className='container mt-5'>
            <h1>Login Screen</h1>
            <hr></hr>

            <button className='btn btn-primary' onClick={handleLogin}> Log In </button>
        </div>
    )
}
