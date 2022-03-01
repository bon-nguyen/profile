import React from 'react';
import { FooterContainer, FooterInner, FooterTop, FooterCoppy, FooterSocial, FooterList, FooterItem } from './Footer';
import { MdFacebook } from 'react-icons/md';
import { AiFillGithub } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import Logo from '../Logo';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterTop>
                    <Logo />
                    <FooterSocial>
                        <FooterList>
                            <FooterItem>
                                <a title="GitHub" href='https://github.com/bon-nguyen' target="_blank" rel="noopener noreferrer"><AiFillGithub size={20}/></a>
                            </FooterItem>
                            <FooterItem>
                                <a title="Facebook" href='https://www.facebook.com/B5CbV116Y/' target="_blank" rel="noopener noreferrer"><MdFacebook size={20}/></a>
                            </FooterItem>
                            <FooterItem>
                                <a title="Telegram" href='https://t.me/bonnguyen09' target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={20}/></a>
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