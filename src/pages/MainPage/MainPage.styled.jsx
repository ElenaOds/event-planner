import styled from '@emotion/styled';
import { Link } from "react-router-dom";


export const Wrapper = styled.section`
    padding: 40px 24px;
        
    @media screen and (min-width: 768px) {
        padding: 40px;    
    }

    @media screen and (min-width: 1280px) {
        padding: 60px 80px 60px 80px;
         
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 40px;

    @media screen and (min-width: 768px) {
        margin-bottom: 24px; 
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 0; 
    }
`;


export const Title = styled.h1`
    font-family: Poppins;
    font-weight: 600;
    font-size: 32px;
    color: var(--textColor);
    display: none;
    
    @media screen and (min-width: 768px) {
        display: block;
        margin-bottom: 42px;
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 0;
    }
`;

export const StyledLink = styled(Link)`
    width: 56px;
    height: 56px;
    background-color: var(--accentColor);
    text-decoration: none;
    padding: 16px;
    border-radius: 8px;
    display:flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;

    @media screen and (min-width: 768px) {
        width: 193px;
    }
`;

export const BtnText = styled.span`
    display: none;

    @media screen and (min-width: 768px) {
        display: block;
        margin-left: 16px;
        font-family: Poppins;
        font-weight: 500;
        forn-size: 16px;
        color: var(--bgdColor);
    }
`;

export const ListWrapper = styled.div`
    max-width: 480px;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 768px) {
        max-width: 768px;
    }

    @media screen and (min-width: 1280px) {
        max-width: 1280px;
    }
`;

