import styled from '@emotion/styled';

export const List = styled.ul`
padding: 0;
margin: 0;
display: grid;
gap: 24px;
align-items: center;
justify-items: center;

@media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;