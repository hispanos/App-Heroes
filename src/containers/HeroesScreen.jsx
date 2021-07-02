import React from 'react'
import { useLocation } from 'react-router-dom';
import HeroesList from '../components/heroes/HeroesList';

const HeroesScreen = () => {
    const location = useLocation();
    const pathname = location.pathname;
    let publisher = "";
    switch (pathname) {
        case "/dc":
            publisher = "DC Comics"
            break;

        case "/marvel":
            publisher = "Marvel Comics"
            break;

        default:
            publisher = "DC Comics"
            break;
    }
    return (
        <>
            <HeroesList 
                publisher={publisher}
            />
        </>
    )
}

export default HeroesScreen
