import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import { ReactComponent as Arrow } from "../../icons/arrow-left.svg";



export const Wrapper = styled.div`
    padding: 42px 24px;

    @media screen and (min-width: 768px) {
        padding: 40px;
    }

    @media screen and (min-width: 1280px) {
        padding: 18px 80px 80px 80px;
    }
`;

export const ArrowLeft = styled(Arrow)`
    margin-right: 8px;
    stroke: var(--accentColor);
`;

export const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 67px;
    color: var(--accentColor);
    border: none;
    cursor: pointer;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 25px;

    &:hover {
        border-bottom: 2px solid var(--accentColor);
    }

    @media screen and (min-width: 1280px) {
        margin-bottom: 17px;
    }
`;
