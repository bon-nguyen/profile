import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';
import { CONTACT } from '../../../constants/contact';
import ContactItem from '../ContactItem';
import { ContactContainer, ContactInner, ContactSubTitle, ContactWrap } from './ContactSection';

const ContactSection = () => {
    return (
        <ContactContainer>
            <ContactInner>
                <Title>Contact Me</Title>
                <ContactSubTitle>Feel free to contact me</ContactSubTitle>
                <ContactWrap>
                    {CONTACT.map((props, id) => (
                        <ContactItem key={id} {...props} />
                    ))}
                </ContactWrap>
            </ContactInner>
        </ContactContainer>
    );
};

export default ContactSection;