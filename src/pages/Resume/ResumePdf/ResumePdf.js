import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const ResumePdfContainer = styled.section`
    padding: 70px 5%;
    background-color: var(--bg-secondary);
    position: relative;
    overflow: hidden;
    

    @media ${device.laptop}{
        
    }
`

export const ResumePdfInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    
    .react-pdf__Document{
        width: 100%;
    }

`

export const ResumePdfWrap = styled.div`

`