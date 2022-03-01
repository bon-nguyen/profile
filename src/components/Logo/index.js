import React from 'react';
import { routes } from '../../routes/BaseRoutes';
import { LogoContainer } from './Logo';

const Logo = () => {
    return (
        <LogoContainer to={routes.HOME}>
            <span>N</span>
            <span>TB</span>
        </LogoContainer>
    );
};

export default Logo;