import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';

import { InfoContainer, InfoDescription, InfoInner,  InfoThumbnail, InfoText } from './InfoSection';
import TabOne from '../../../components/UIElements/Tab';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import avatar from '../../../assets/svg/profile.svg';


const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoInner>
                <InfoThumbnail>
                    <LazyLoadImage width="100%" height="auto" alt="avatar" effect="blur" src={avatar} />
                </InfoThumbnail>
                <InfoDescription>
                    <Title>About me</Title>
                    <InfoText>I fell in love with programming and I have at least learnt something, I think… 🤷&zwj;</InfoText>
                    <TabOne/>
                </InfoDescription>
            </InfoInner>
        </InfoContainer>
    );
};

export default InfoSection;