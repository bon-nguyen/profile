import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import AboutTextCard from './AboutTextCard';
import TechSkill from './TechSkills';

const About = () => {
    return (
        <BaseLayout>
            <AboutTextCard />
            <TechSkill />
        </BaseLayout>
    );
};

export default About;