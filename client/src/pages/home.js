import React from 'react';
import CreateNavBar from '../components/Navbar/Navbar';
import CreateHero from '../components/Hero/Hero';
import CreateFooter from '../components/Footer/Footer';
import Results from '../containers/Results/Results';

function HomePage() {
    return (
        <>
        <CreateNavBar />
        <CreateHero />
        <Results />
        <CreateFooter />
        </>
    );
}

export default HomePage;