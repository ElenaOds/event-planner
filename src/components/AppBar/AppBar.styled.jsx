import styled from '@emotion/styled';

export const Wrapper = styled.div`
    min-width: 320px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
   
   
    border-bottom: 1px solid var(--accentColor);
    background-color: var(--headerBgdColor);

    @media screen and (min-width: 768px) {
        padding: 26px 40px 18px 40px;
    }

    @media screen and (min-width: 1280px) {
        padding: 60px 80px;
    }
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
       
    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        // margin-right: 24px;
    }
`;

export const Title = styled.h1`
    font-family: 'Alata';
    font-weight: 400;
    font-size: 24px;
    margin-bottom: 31px;
    color: var(--accentColor);

    @media screen and (min-width: 768px) {
        margin-bottom: 0;
        margin-right: 80px;
    }
`;


export const Selector = styled.select`
    display: grid;
    width: 69px;
    height: 48px;
    padding: 12px 4px 12px 12px;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 16px;
    color: var(--textColor);
    border-radius: 8px;
    border: none;
    position: relative;
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28); 
    
    &.active {
        outline: none;
    }
    &:focus {
        outline: none;
    }
`;

