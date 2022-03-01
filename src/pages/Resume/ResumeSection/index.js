import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { ReactComponent as ResumeIcon } from '../../../assets/svg/resume.svg';
import { ResumeContainer, ResumeInner, ResumeStory, ResumeSvg, ResumeWrap } from './ResumeSection';
import { Title } from '../../../components/UIElements/TitlePrimary/TitlePrimary';
import Button from '../../../components/UIElements/Button';


const resumeLink = 'https://raw.githubusercontent.com/bon-nguyen/resume/main/NguyenTranBon-CV.pdf';

const ResumeSection = () => {
    return (
        <ResumeContainer>
            <ResumeInner>
                <ResumeStory>
                    <Title>My Resume</Title>
                </ResumeStory>
                <ResumeSvg>
                    <ResumeIcon />
                </ResumeSvg>
            </ResumeInner>

            <ResumeWrap>
                <Button  href={resumeLink} target='_blank'> <AiOutlineDownload size={20} /> download resume.<span>.pdf</span> </Button>
            </ResumeWrap>
        </ResumeContainer>
    );
};

export default ResumeSection;