import React, { useState } from 'react';
import { HeaderContainer } from './Header';

const Header = ({children}) => {
    const [headerHighlight, setHeaderHighlight] = useState(false);

    const scrollHandler = () => {
        setHeaderHighlight(window.scrollY >= 20);
      };
    window.addEventListener('scroll', scrollHandler);

    return (
        <HeaderContainer className={headerHighlight ? 'headerHighlight' : ''}>
                {children}
        </HeaderContainer>
    );
};

export default Header;