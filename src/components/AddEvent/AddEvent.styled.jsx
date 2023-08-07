import styled from '@emotion/styled';

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
    max-width: 1280px;
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
      margin-bottom: 25px;
     }
`;
export const Form = styled.form`
    padding: 40px 16px;
    width: 272px;
    border-radius: 8px;
    box-shadow: 2px 4px 9px rgba(166, 141, 174, 0.28);
    background-color: var(--bgdColor);
    display: flex;
    flex-direction: column;

  @media screen and (min-width: 768px) {
      width: 688px;
      padding: 40px 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 40px;
}
`;