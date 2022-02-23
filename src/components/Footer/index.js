import React from 'react';
import { routes } from '../../routes/BaseRoutes';
import { FooterContainer, FooterInner, FooterTop, FooterLogo ,FooterCoppy, FooterSocial, FooterList, FooterItem } from './Footer';
import { MdFacebook } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterTop>
                    <FooterLogo to={routes.HOME}>
                        <span>N</span>
                        <span>TB</span>
                    </FooterLogo>
                    <FooterSocial>
                        <FooterList>
                            <FooterItem>
                                <a title="GitHub" href='https://github.com/vsnaichuk' target="_blank" rel="noopener noreferrer"><AiFillGithub size={20}/></a>
                            </FooterItem>
                            <FooterItem>
                                <a title="Facebook" href='https://github.com/vsnaichuk' target="_blank" rel="noopener noreferrer"><MdFacebook size={20}/></a>
                            </FooterItem>
                            <FooterItem>
                                <a title="Telegram" href='https://github.com/vsnaichuk' target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={20}/></a>
                            </FooterItem>
                        </FooterList>
                    </FooterSocial>
                    <FooterCoppy>Copyright &copy; 2022 Made with ❤️ by <span >Tran Bon</span></FooterCoppy>
                </FooterTop>
            </FooterInner>
        </FooterContainer>
    );
};

export default Footer;