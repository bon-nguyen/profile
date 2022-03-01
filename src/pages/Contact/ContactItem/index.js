import React from 'react';
import { ContactItemBox, ContactItemContent, ContactItemIcon, ContactItemInner, ContactItemTitle } from './ContactItem';

const ContactItem = ({icon, title, description}) => {
    return (
        <ContactItemBox>
            <ContactItemIcon className='icon-address'>
                {icon}
            </ContactItemIcon>
            <ContactItemInner>
                <ContactItemTitle>{title}</ContactItemTitle>
                <ContactItemContent>{description}</ContactItemContent>
            </ContactItemInner>
        </ContactItemBox>
    );
};

export default ContactItem;