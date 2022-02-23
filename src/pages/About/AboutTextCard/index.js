import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';
import { AboutContainer, AboutInner, AboutStory, AboutStoryImage, AboutContext, AboutStoryImageContainer, AboutActivity, AboutStrive, AboutLocaltion } from './AboutTextCard';
import { MdOutlineLocationOn } from 'react-icons/md';

const AboutTextCard = () => {
    return (
        <AboutContainer>
            <AboutInner>
                <AboutStory>
                    <Title>Who am I?</Title>
                    <AboutContext>
                        Hi Everyone, I am <span>Tran Bon</span> 😄.<br/>
                        I'm a software engineer focusing on Front-End web.<br/>
                    </AboutContext>
                    <AboutContext>
                        You can find me working with<span> ES6 ,</span><span> JavaScript, </span><span>React</span>.
                    </AboutContext>
                    <AboutContext>
                        Apart from coding, some other activities that I love to do!
                    </AboutContext>
                    <AboutActivity>
                        <li>
                            <span>⚡</span> Playing Games
                        </li>
                        <li>
                            <span>⚡</span> Reading
                        </li>
                        <li>
                            <span>⚡</span> Travelling
                        </li>
                    </AboutActivity>
                    <AboutLocaltion>
                        <MdOutlineLocationOn size={20} /> Vietnamese
                    </AboutLocaltion>
                    <AboutStrive>
                        "Strive to build things that make a difference!"
                    </AboutStrive>
                </AboutStory>
                <AboutStoryImageContainer>
                    <AboutStoryImage />
                </AboutStoryImageContainer>
            </AboutInner>
        </AboutContainer>
    );
};

export default AboutTextCard;