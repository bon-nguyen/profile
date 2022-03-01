import styled, { keyframes } from "styled-components";
import logo from '../../../assets/images/avatar.jpg';
import { device } from "../../../styles/breakpoints";


const wave = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;


export const HeroContainer = styled.section`
  position: relative;
  padding: 70px 5%;
  display: flex;
  alight-item: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg);
  z-index: -1;

  @media ${device.laptop}{
    padding: 150px 90px;
  }

`

export const HeroTitle = styled.h1`
  font-size: 36px;
  font-weight: 900;
  font-family: Montserrat,sans-serif;
  line-height: 48px;
  color: var(--txt-title);

  strong{
    font-weight: 900;
    color: var(--txt-primary);
  }

  span{
    animation-name: ${wave};
    animation-duration: 1.8s;
    animation-iteration-count: infinite;
    transform-origin: 70% 70%;
    animation-fill-mode: forwards;
    display: inline-block;
  }

  @media ${device.laptop}{
    font-size: 56px;
    line-height: 90px;
  }

`

export const HeroImage = styled.img.attrs({
    src: `${logo}`
  })`
  border-radius: 50%;
  display: inline-block;

  line-height: 1;
  vertical-align: middle;
  flex-shrink: 0;
  width: 150px;
  height: 150px;
  border: 0.2rem solid var(--txt-primary);
  margin-bottom: 1rem;
  margin-top: 3rem;
`;

export const HeroSubTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: var(--txt);
  font-weight: 700;

  .typewriterWrapper {
    font-size: 1.5rem;
    color: var(--txt-primary);
    font-weight: 900;
  }
  .typewriterCursor {
    font-size: 1.5rem;
    color: var(--txt-primary);
  }

  @media ${device.laptop}{
    font-size: 2.5rem;

    .typewriterCursor {
      font-size: 2.75rem;
    }
    .typewriterWrapper {
      font-size: 2.75rem;
    }

  }

`

export const HeroWelcome = styled.span`
  font-size: 15px;
  color: var(--txt);
  text-transform: uppercase;
  letter-spacing: 4px;

`