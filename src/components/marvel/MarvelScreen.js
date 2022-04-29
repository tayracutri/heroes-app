import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1 className='m-5'>Marvel Screen</h1>
            <HeroesList publisher='Marvel Comics' />
        </div>
    )
}
