import React from 'react';
import AppTypewriter from '../../../components/UIElements/Typewriter';
import { HeroContainer, HeroImage, HeroSubTitle, HeroTitle, HeroWelcome} from './HeroSection';


const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroImage></HeroImage>
            <HeroWelcome>Welcome to my World</HeroWelcome>
            <HeroTitle>Hi, I'm <strong>Tran  Bon. </strong><span>👋</span></HeroTitle>
            <HeroSubTitle>
                <AppTypewriter
                    strings={[
                    'UI/UX Designer',
                    'ReactJS Developer.',
                    ]}
                    wrapperClassName='typewriterWrapper'
                    cursorClassName='typewriterCursor'
                />
            </HeroSubTitle>
            
        </HeroContainer>
    );
};

export default HeroSection; 