import styled from '@emotion/styled';
import bgd_image from '../../images/bgd_image.jpg';

export const Wrapper = styled.div`
    background-image: url(${bgd_image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100vh;
    padding: 40px 24px;
    
    @media screen and (min-width: 768px) {
        padding: 40px;
    }

    @media screen and (min-width: 1280px) {
        padding: 60px;
    }
`;

export const Title = styled.h2`
    font-family: Poppins;
    fonr-weight: 600;
    font-size: 32px;
    color: var(--textColor);
    diaplay: none;
    
    @media screen and (min-width: 768px) {
        diaplay: block;
    }
`;