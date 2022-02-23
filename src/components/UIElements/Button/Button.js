import styled from "styled-components";

export const ButtonAs = styled.button`
    background: ${props => props.primary ? "var(--btn-primary)" : "white"};
    color: ${props => props.primary ? "white" : "var(--btn-primary)"};
    padding: 0.375rem 0.75rem;
    display: flex;
    align-items: center;
    border: 2px solid var(--btn-primary);
    border-radius: 4px;
    position: relative;
    letter-spacing: .2px;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;

    svg {
        vertical-align: middle;
    }

    &:hover {
        color: var(--btn-primary);
        background-color: ${props => props.primary ? "#fff" : "red"};
        border-color: ${props => props.primary ? "var(--btn-primary)" : "var(--txt-primary)"};
    }
`

export const  ButtonLink = styled.a`
    background: ${props => props.primary ? "var(--btn-primary)" : "transparent"};
    color: ${props => props.primary ? "white" : "var(--btn-primary)"};
    padding: 0.375rem 0.75rem;
    display: flex;
    align-items: center;
    border: 2px solid var(--btn-primary);
    border-radius: 4px;
    position: relative;
    letter-spacing: .2px;
    text-transform: uppercase;
    transition: all 0.5s ease 0s;

    svg {
        vertical-align: middle;
    }

    &:hover {
        color: ${props => props.primary ? "var(--btn-primary)" : "white"};
        background-color: ${props => props.primary ? "transparent" : "var(--btn-primary)"};
        border-color: ${props => props.primary ? "var(--btn-primary)" : "var(--btn-border)"};
    }
`