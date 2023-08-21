import styled from "@emotion/styled/macro";


export const Section = styled.section`
  display: flex;
  flex-direction: column;
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

export const Title = styled.h1`
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
    
  @media screen and (min-width: 768px) {
      padding: 40px 24px;
      width: 688px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
}

`;
export const FormWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justufy-content: center;

  @media screen and (min-width: 768px) {
    display: grid;   
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 24px;
    justify-content: center;

    & > :nth-child(2) {
      grid-row: span 2;
      grid-column-start: 1;
    }

    & > :nth-child(5) {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    & > :nth-child(6) {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    & > :nth-child(7) {
      grid-column-start: 2;
      grid-row-start: 3;
    }
    & > :nth-child(8) {
      grid-column-start: 2;
      grid-row-start: 4;
    }

    & > :nth-child(10) {
      grid-column-start: 2;
      grid-row-start: 4;
    }
  }

  @media screen and (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 42px;
    align-content: center;
     

    & > :nth-child(3) {
      grid-column-start: 2;
      grid-row-start: 1;
    }

    & > :nth-child(4) {
      grid-column-start: 2;
      grid-row-start: 2;
    }

    & > :nth-child(5) {
      grid-column-start: 2;
      grid-row-start: 3;
    }
    & > :nth-child(6) {
      grid-column-start: 3;
      grid-row-start: 1;
    }
    & > :nth-child(7) {
      grid-column-start: 3;
      grid-row-start: 2;
    }
    & > :nth-child(8) {
      grid-column-start: 3;
      grid-row-start: 3;
    }
  }
}
`;

export const Label = styled.label`
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      width: 308px;
     
  }
  @media screen and (min-width: 1280px) {
      width: 372px;
}

    & > span {
    font-family: poppins;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: var(--accentColor);
    margin-bottom: 8px;
    }

    & > p {
       font-family: poppins;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: var(--highColor);
        text-align: right;
        display: none;
    }

    & > input,
    & > textarea {
        margin-bottom: 20px;
        padding: 16px 12px;
        border-radius: 8px;
        border: 1px solid var(--dividerColor);
        font-family: poppins;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: var(--textColor);
        outline: none;

      &:invalid {
            margin-bottom: 0;
            border: 1px solid var(--highColor);
        }
      }
      

     & > input:invalid ~ p,
     & > textarea:invalid ~ p {
         display: block;
     }

    & > select {
        margin-bottom: 20px;
        padding: 16px 12px;
        border-radius: 8px;
        border: 1px solid var(--dividerColor);
        font-family: poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: var(--textColor);

        & > option {
          font-family: poppins;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: var(--textColor);
        }
    } 

    & > input::placeholder,
    & > textarea::placeholder {
      font-family: poppins;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--dividerColor);
    }
    
`;

export const Button = styled.button`
  display: block;
  text-align: center;
  justify-content: center;
  width: 240px;
  height: 56px;
  background-color: var(--accentColor);
  border: none;
  padding: 16px;
  font-family: poppins;
  font-weight: 500;
  font-size: 16px;
  color: var(--bgdColor);
  border-radius: 8px;
  cursor: pointer;


&:hover {
  background-color: var(--btnHover);
  color: var(--bgdColor);
}

&:disabled {
  background-color: var(--dividerColor);
  cursor: not-allowed;
}

@media screen and (min-width: 768px) {
  grid-row-start: 6;
  grid-column-start: 2;
  justify-self: end;
  margin-top: 40px;
 }
@media screen and (min-width: 1280px) {
  grid-column-start: 3;
  grid-row-start: 4;
  margin-top: 60px;
 }
`;



