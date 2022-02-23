import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Particles from '../../components/UIElements/Particles/Particles';

const BaseLayout = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <Header isOpen={isOpen} toggle={toggle} >
                <Sidebar isOpen={isOpen} toggle={toggle} />
            </Header>
            
            <Particles />
            <main>{children}</main>
            <Footer/>
            
        </>
    );
};

export default BaseLayout;