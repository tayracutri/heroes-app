// import React from 'react'
import { heroesData } from '../data/heroesData'

export const getHeroById = (id = '') => {
    console.log('getHeroById called');
    return heroesData.find(hero => hero.id === id);
}