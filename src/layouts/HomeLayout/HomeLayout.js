import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainNavigation from '../../components/Navigation/MainNavigation';
import Particles from '../../components/UIElements/Particles/Particles';

const HomeLayout = ({children}) => {

    return (
        <>
            <Particles />
            <Header>
                <MainNavigation/>
            </Header> 
            <main>{children}</main>
            <Footer/>
        </>
    );
};

export default HomeLayout;