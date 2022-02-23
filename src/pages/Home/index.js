import React from 'react';
import HomeLayout from '../../layouts/HomeLayout/HomeLayout';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';

const Home = () => {
    
    return (
        <HomeLayout>
            <HeroSection/>
            <InfoSection/>
        </HomeLayout>
    );
};

export default Home;