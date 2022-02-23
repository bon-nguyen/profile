import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';

import { InfoContainer, InfoDescription, InfoInner, InfoTab, InfoTabContent, InfoTabTitle, InfoThumbnail, InfoImage, InfoText } from './InfoSection';
import TabOne from '../../../components/UIElements/Tab';



const InfoSection = () => {
    return (
        <InfoContainer>
            <InfoInner>
                <InfoThumbnail>
                    <InfoImage/>
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