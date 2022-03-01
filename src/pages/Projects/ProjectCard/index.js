import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import { ProjectCardBox, ProjectCardBoxContent, ProjectCardBoxDescription, ProjectCardBoxThumbnail, ProjectCardBoxTitle, ProjectCardItem } from './ProjectCard';


const ProjectCard = ({ id,image='', title, description}) => {
    const location = useLocation();
    return (
        <ProjectCardItem key={id}>
            <Link 
                to={{
                    pathname: `/project/${id}`,
                    state: {
                        background: location,
                    },
                }}
            >
            <ProjectCardBox>
                <ProjectCardBoxThumbnail>
                    <LazyLoadImage
                        alt="card-img"
                        effect="blur"
                        src={image.src}
                        width="100%"
                        height="15rem"
                        placeholderSrc={image.placeholderSrc}
                    />
                </ProjectCardBoxThumbnail>
                
                <ProjectCardBoxContent>
                    <ProjectCardBoxTitle>{title}</ProjectCardBoxTitle>
                    <ProjectCardBoxDescription>{description}</ProjectCardBoxDescription>
                </ProjectCardBoxContent>
                
            </ProjectCardBox>
            </Link>
        </ProjectCardItem>
    );
};



export default ProjectCard;