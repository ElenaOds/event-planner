import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";


export const Wrapper = styled.div`
    width: 271px;
    height: 480px;
    border-radius: 12px;
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
    background-color: var(--bgdColor);

  @media screen and (min-width: 768px) {
      width: 332px;
  }

  @media screen and (min-width: 1280px) {
    width: 302px;
}
`;

export const DetailsBox = styled.div`
  position: relative;
  height: 280px;
  width: 100%;

  @media screen and (min-width: 768px) {
    height: 336px;
  }
`;


export const Img = styled.img`
    border-radius: 12px 12px 0 0;
    height: 100%;
    object-fit: cover;
 
`;

export const FilterBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    top: 12px;
    left: 12px;  
`;

export const Category = styled.p`
    background-color:  var(--bgdColor);
    padding: 6px 12px;
    border-radius: 8px;
    margin-right: 12px;
    font-family: poppins;
    font-weight: 500;
    font-size: 14px;
    color: var(--accentColor);
`;

export const Priority = styled.p`
    background-color: var(--bgdColor);
    padding: 6px 12px;
    border-radius: 8px;
    font-family: poppins;
    font-weight: 500;
    forn-size: 14px;
    ${(props) => {
        switch (props.priority) {
          case 'high':
            return 'color: var((--highColor));'
          case 'medium':
            return 'color: var(--mediumColor);'
          case 'low':
            return 'color: var(--lowColor);'
          default:
            return 'color: var(--lowColor);'
        }
      }}
`;

export const Details = styled.div`
   position: absolute;
   display: flex;
   justify-content: space-between;
   background-color: var(--bgdColor);
   opacity: 0.8;
   bottom: 0;
   right: 0;
   left: 0;
   padding: 8px 16px;
`;

export const DetailsInfo = styled.p`
  font-family: poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--accentColor);
`;

export const ContentWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 16px 16px 0 16px;
`;

export const Title = styled.h3`
  font-family: poppins;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: var(--titleColor);
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--titleColor);
  margin-bottom: 16px;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-self: flex-end;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  width: 66px;
  height: 20px;
  background-color: var(--accentColor);
  padding: 10px;
  font-family: poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: var(--bgdColor);
  border: none;
  border-radius: 8px;
 


  @media screen and (min-width: 768px) {
    width: 114px;
    height: 40px;
  }

  &:hover {
    background-color: var(--btnHover);
  }
`;  