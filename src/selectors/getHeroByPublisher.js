// import React from 'react'
import { heroesData } from '../data/heroesData'


export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics']

    if (!validPublishers.includes(publisher)) {
        throw new Error(`Cannot find publisher ${publisher}`)
    }

    return heroesData.filter(hero => hero.publisher === publisher)
}
