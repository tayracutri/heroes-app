import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../components/auth/AuthContext';

export const PublicRoute = ({ children }) => {
    const { user } = useContext(AuthContext)

    console.log(children);

    return user.logged
        ? <Navigate to='login' />
        : children
}


