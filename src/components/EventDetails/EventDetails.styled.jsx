import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
  max-width: 272px;

  @media screen and (min-width: 768px) {
    max-width: 688px;
   }
  @media screen and (min-width: 1280px) {
    max-width: 628px;
   }
`;

export const Title = styled.h2`
  font-family: Poppins;
  font-weight: 600;
  font-size: 24px;
  color: var(--textColor);
  margin-bottom: 24px;
  display: flex;
  align-self: flex-start;

 
    @media screen and (min-width: 768px) {
      font-size: 32px;
     }

     @media screen and (min-width: 1280px) {
      margin-bottom: 14px;
     }
`;
export const Wrapper = styled.div`
    width: 272px;
    border-radius: 8px;
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
    background-color: var(--bgdColor);

  @media screen and (min-width: 768px) {
      width: 688px;
  }

  @media screen and (min-width: 1280px) {
    width: 628px;
}
`;

export const DetailsBox = styled.div`
  padding: 24px 16px 40px 16px;

  @media screen and (min-width: 768px) {
    padding: 24px 24px 40px 24px;
}

  @media screen and (min-width: 1280px) {
    padding: 20px 16px 40px 16px;
}
`;

export const Img = styled.img`
    border-radius: 8px;
    height: 168px;
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: 768px) {
      height: 272px;
    }
`;

export const Description = styled.p`
  font-family: poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #49454F;
  margin-bottom: 24px;
`;

export const DetailsInfo = styled.ul`
  display: flex;  
  flex-wrap: wrap; 
  gap: 12px;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  text-align: left;

  @media screen and (min-width: 1280px) {
    height: 24px;
  }
`;

export const Priority = styled.li`
  display: inline-block;
  background-color: var(--bgdColor);
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: 4px 5px 9px rgba(166, 141, 174, 0.28);
  font-family: poppins;
  font-weight: 500;
  font-size: 14px;
    ${(props) => {
        switch (props.priority) {
          case 'high':
            return 'color: var(--highColor);'
          case 'medium':
            return 'color: var(--mediumColor);'
          case 'low':
            return 'color: var(--lowColor);'
          default:
            return 'color: var(--lowColor);'
        }
      }}
`;


export const DetailsList = styled.li`
  background-color: var(--bgdColor);
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: 4px 5px 9px rgba(166, 141, 174, 0.28);
  font-family: poppins;
  font-weight: 500;
  font-size: 14px;
  color: var(--accentColor);
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-align: center;
  justify-content: center;
  text-decoration: none;
  width: 108px;
  height: 32px;
  background-color: var(--bgdColor);
  padding: 8px 16px;
  font-family: poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--accentColor);
  border: 1px solid var(--accentColor);
  border-radius: 8px;
  display: none;
 
  @media screen and (min-width: 768px) {
    width: 55px;
  }

  &:hover {
    background-color: var(--btnHover);
    color: var(--bgdColor);
  }
`;  

export const BtnWrapper = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: flex-end;
    justify-content: right;
    gap: 16px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  text-align: center;
  justify-content: center;
  width: 108px;
  height: 32px;
  background-color: var(--accentColor);
  padding: 8px 16px;
  font-family: poppins;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: var(--bgdColor);
  border: none;
  border-radius: 8px;
  cursor: pointer;
 
  @media screen and (min-width: 768px) {
    width: 108px;
  }

  &:hover {
    background-color: var(--btnHover);
  }
`;  