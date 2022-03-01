import React from 'react';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';
import { PROJECTS } from '../../../constants/projects';
import ProjectCard from '../ProjectCard';
import { ProjectSectionCardList, ProjectSectionContainer, ProjectSectionInner, ProjectSectionSubTitle } from './ProjectSection';

const ProjectSection = () => {
    return (
        <ProjectSectionContainer>
            <ProjectSectionInner>
                <Title>My Project</Title>
                <ProjectSectionSubTitle>Here are a few projects I've worked on recently.</ProjectSectionSubTitle>
                <ProjectSectionCardList>
                    {PROJECTS.map((props) => (
                        <ProjectCard key={props.id} {...props} />
                    ))}
                </ProjectSectionCardList>
            </ProjectSectionInner>
        </ProjectSectionContainer>
    );
};

export default ProjectSection;