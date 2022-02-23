import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';
import { SkillContainer, SkillInner, SkillList, SkillSubTitle } from './TechSkills';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass, DiWordpress, DiJavascript1, DiPhp, DiBootstrap } from 'react-icons/di';
import { FaReact, FaGitAlt } from 'react-icons/fa';
import { SiRedux } from 'react-icons/si';


const TechSkill = () => {
    return (
        <SkillContainer>
            <SkillInner>
                <Title>Professional Skills</Title>
                <SkillSubTitle>I've spent my time seeking and learning new technologies and forms of digital expression. This has led to me working on some
                    <span> projects</span> , and worked with some great people.
                </SkillSubTitle>
                <SkillList>
                    <li><AiOutlineHtml5 size={64}/></li>
                    <li><DiCss3 size={64}/></li>
                    <li><DiJavascript1 size={64}/></li>
                    <li><FaReact size={64}/></li>
                    <li><SiRedux size={64}/></li>
                    <li><DiBootstrap size={64}/></li>
                    <li><DiSass size={64}/></li>
                    <li><DiWordpress size={64}/></li>
                    <li><DiPhp size={64}/></li>
                    <li><FaGitAlt size={64}/></li>
                </SkillList>
            </SkillInner>
        </SkillContainer>
    );
};

export default TechSkill;