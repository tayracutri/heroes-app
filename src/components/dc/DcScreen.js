import React from 'react'
import { HeroesList } from '../heroes/HeroesList'

export const DcScreen = () => {
    return (
        <div>
            <h1 className='m-5'>DC Screen </h1>

            <HeroesList publisher='DC Comics' />
        </div>
    )
}
