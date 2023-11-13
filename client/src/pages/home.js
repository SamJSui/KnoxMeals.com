import React from 'react';
import CreateNavBar from '../components/Navbar/Navbar';
import CreateHero from '../components/Hero/Hero';
import CreateFooter from '../components/Footer/Footer';
import Restaurants from '../components/Restaurants/Restaurants';

function HomePage() {
    return (
        <>
            <CreateNavBar />
            <CreateHero />
            <Restaurants />
            <CreateFooter />
        </>
    );
}

export default HomePage;