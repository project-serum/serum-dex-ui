import styled from 'styled-components';

export const HideOnMobile = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: initial;
  }
`;
