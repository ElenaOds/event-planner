import styled from '@emotion/styled';
import { ReactComponent as Search } from '../../icons/search.svg';
import { ReactComponent as Cross } from '../../icons/cross.svg';

export const Form = styled.div`
    position: relative;
    max-width: 480px;
    height: 48px;
    background-color: var(--bgdColor);

    @media screen and (min-width: 768px) {
        width: 368px;
    }

    @media screen and (min-width: 1280px) {
        width: 410px;
    }
`;

export const StyledSearch = styled(Search)`
    position: absolute;
    top: 30%;
    left: 12px;
    margin: 0;
 `;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    display: block;
    padding: 0 36px 0 48px;
    border: none;
    border-radius: 8px;
    font-family: 'Poppins';
    font-weight: 300;
    font-size: 14px;
    color: var(--accentColor);
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
  

    &::placeholder {
        color: #888888;
    }
    
    &.active {
        outline: none;
        color: var(--accentColor);
    }

    &:focus {
        outline: none;
    } 
`;

export const StyledCross = styled(Cross)`
    position: absolute;
    top: 30%;
    right: 12px;
    margin: 0;
    stroke: var(--accentColor);
    // display: none;
`;