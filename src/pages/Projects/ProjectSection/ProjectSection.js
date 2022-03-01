import styled from "styled-components";
import { device } from "../../../styles/breakpoints";


export const ProjectSectionContainer = styled.div`
    padding: 70px 5%;
    background-color: var(--bg);

    @media ${device.laptop}{
        padding: 150px 90px;
}
`

export const ProjectSectionInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;

    @media ${device.laptop}{

    }
`

export const ProjectSectionSubTitle = styled.h4`
    font-size: 16px;
    color: var(--txt);
    padding: 0;

    @media ${device.laptop}{
        font-size: 18px;
        padding: 0 20%;
    }
`

export const ProjectSectionCardList = styled.ul`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(1,minmax(0,1fr));
    gap: 1.5rem;

    @media ${device.mobileM}{
        grid-template-columns: repeat(2,minmax(0,1fr));
    }

    @media ${device.laptop}{
        grid-template-columns: repeat(3,minmax(0,1fr));
    }
`