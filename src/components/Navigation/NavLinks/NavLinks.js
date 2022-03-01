import styled from "styled-components";

export const NavLinksItem = styled.li`
    position: relative;
    overflow: hidden;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    color: var(--txt);
    justify-content: center;

    a{
        text-decoration: none;
        cursor: pointer;
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: var(--txt-title);
        position: relative;
        height: 56px;
        font-weight: 700;
        transition: .3s ease-in;

        &:before{
            content: "";
            width: 100%;
            height: 3px;
            background: var(--txt-primary);
            bottom: 0;
            left: 0;
            position: absolute;
            transform: translateX(-50px);
            opacity: 0;
            transition: .3s ease-in;
        }

        &:hover{
            color: var(--txt-primary);
            &:before{
                opacity: 1;
                transform: translateX(0px);
            }
        }

        &.active:before{
            opacity: 1;
            transform: translateX(0px);
        }

        &.active{
            color: var(--txt-primary);
        }
    }
`

export const NavLinksList = styled.ul`
    display: flex;
`