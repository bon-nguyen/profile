import React, { useEffect, useRef, useState } from 'react';
//react-pdf
import { Document, Page, pdfjs } from 'react-pdf';
import LinerProgress from '../../../components/UIElements/LinerProgress';
import { ResumePdfContainer, ResumePdfInner } from './ResumePdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = 'https://raw.githubusercontent.com/bon-nguyen/resume/main/NguyenTranBon-CV.pdf';


const ResumePdf = () => {
    const pdfWrapper = useRef(null);
    const [pdfPageWidth, setPdfPageWidth] = useState(null);
    const [numPages, setNumPages] = useState(null);
    
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      const textLayers = document.querySelectorAll(
        '.react-pdf__Page__textContent',
      );
      textLayers.forEach((layer) => {
        const { style } = layer;
        style.top = '0';
        style.left = '0';
        style.transform = '';
      });
    }

    useEffect(() => {
      setPdfPageWidth(
        pdfWrapper.current?.getBoundingClientRect().width || null,
      );
    }, []);

    return (
        <ResumePdfContainer>
           
            <ResumePdfInner className={pdfWrapper} ref={pdfWrapper}> 
                    <Document  
                        loading={<LinerProgress />}
                        onLoadSuccess={onDocumentLoadSuccess}
                        file={{
                          url: resumeLink,
                        }}
                    >
                        {Array.from(new Array(numPages), (el, index) => (
                          <Page width={pdfPageWidth} key={`page_${index + 1}`} pageNumber={index + 1} />
                        ))}
                    </Document>
      
            </ResumePdfInner>
        </ResumePdfContainer>
    );
};

export default ResumePdf;