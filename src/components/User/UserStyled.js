import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h2`
  color: red;
  text-decoration: underline;

  &:hover {
    color: orange;
  }
`;

export const Text = styled.p`
  color: ${({ hasJob }) => {
    return hasJob ? 'green' : 'black';
  }};
`;

export const StyledBtn = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;
