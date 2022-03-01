import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/BaseRoutes';
import { NavLinksItem, NavLinksList } from './NavLinks';

const NavLinks = () => {
    return (
        <NavLinksList>
            <NavLinksItem>
                <NavLink exact activeClassName="active" to={routes.HOME}>Home</NavLink>
            </NavLinksItem>
            <NavLinksItem>
                <NavLink  activeClassName="active" to={routes.ABOUT}>About</NavLink>
            </NavLinksItem>
            <NavLinksItem>
                <NavLink  activeClassName="active" to={routes.PROJECTS}>Project</NavLink>
            </NavLinksItem>
            <NavLinksItem>
                <NavLink  activeClassName="active" to={routes.RESUME}>Resume</NavLink>
            </NavLinksItem>
            <NavLinksItem>
                <NavLink  activeClassName="active" to={routes.CONTACT}>Contact</NavLink>
            </NavLinksItem>
        </NavLinksList>
    );
};

export default NavLinks;