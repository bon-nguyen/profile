import React, { useState } from 'react';
import BtnTheme from '../../BtnTheme';
import Logo from '../../Logo';
import Burger from '../Burger';
import NavLinks from '../NavLinks';
import SideDrawer from '../SideDrawer';
import { MainNavigationContainer,MainNavigationNav,MainNavigationClose } from './MainNavigation';
import { AiOutlineClose } from 'react-icons/ai';

const MainNavigation = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = ()=> {
        setIsDrawerOpen((prev) => !prev);
    }

    return (
        <MainNavigationContainer>
            <Logo />
            <MainNavigationNav>
                <NavLinks/>
            </MainNavigationNav>
            <BtnTheme />
            <Burger onClick={toggleDrawer} />
            <SideDrawer show={isDrawerOpen} onClose={toggleDrawer}>
                <MainNavigationClose onClick={toggleDrawer}>
                    <AiOutlineClose size={28}/>
                </MainNavigationClose>
                <NavLinks />
            </SideDrawer>
        </MainNavigationContainer>
    );
};

export default MainNavigation;