import React, { useState } from 'react';
import { HeaderContainer, HeaderWrap, HeaderLogo, HeaderNav, HeaderHamburger,HeaderItem,HeaderList, HeaderMobile, HeaderWelcome } from './Header';
import { MdMenu, MdClose} from "react-icons/md";
import BtnTheme from '../BtnTheme';
import { routes } from '../../routes/BaseRoutes';
import { NavLink} from 'react-router-dom';

const Header = ({children,isOpen, toggle}) => {
    const [headerHighlight, setHeaderHighlight] = useState(false);

    const scrollHandler = () => {
        setHeaderHighlight(window.scrollY >= 20);
      };
    window.addEventListener('scroll', scrollHandler);

    return (
        <HeaderContainer className={headerHighlight ? 'headerHighlight' : ''}>
            <HeaderWrap>
                <HeaderLogo to={routes.HOME}>
                    <span>N</span>
                    <span>TB</span>
                </HeaderLogo>
                <HeaderWelcome></HeaderWelcome>
                <HeaderNav>
                    <HeaderList>
                        <HeaderItem>
                            <NavLink exact activeClassName="active" to={routes.HOME}>Home</NavLink>
                        </HeaderItem>
                        <HeaderItem>
                            <NavLink  activeClassName="active" to={routes.ABOUT}>About</NavLink>
                        </HeaderItem>
                        <HeaderItem>
                            <NavLink  activeClassName="active" to={routes.PROJECT}>Project</NavLink>
                        </HeaderItem>
                        <HeaderItem>
                            <NavLink  activeClassName="active" to={routes.RESUME}>Resume</NavLink>
                        </HeaderItem>
                        <HeaderItem>
                            <NavLink  activeClassName="active" to={routes.CONTACT}>Contact</NavLink>
                        </HeaderItem>
                    </HeaderList>   
                </HeaderNav>
                <BtnTheme />
                <HeaderMobile>
                    <HeaderHamburger onClick={toggle}>
                        {isOpen ? <MdClose size={22} /> : <MdMenu size={22} />} 
                    </HeaderHamburger>
                    {children}
                </HeaderMobile>
            </HeaderWrap>
        </HeaderContainer>
    );
};

export default Header;