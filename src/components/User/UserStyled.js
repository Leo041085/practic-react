import styled from 'styled-components';

export const Title = styled.h2`
  color: red;
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;

export const Text = styled.p`
  color: ${({ hasJob }) => {
    return hasJob ? 'green' : 'black';
  }};
`;
