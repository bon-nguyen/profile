import React from 'react';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import ResumePdf from './ResumePdf';
import ResumeSection from './ResumeSection';

const Resume = () => {
    return (
        <BaseLayout>
            <ResumeSection />
            <ResumePdf />
        </BaseLayout>
    );
};

export default Resume;