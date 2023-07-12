import styled from 'styled-components';

export const StyledOverlay = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModal = styled.div`
position: absolute;
left: 50%;
top: 50%;
background-color: white;
border-radius: 10px;
padding: 20px;
`;

export const StyledCloseBtn = styled.button`
position: absolute;
right: 10px;
top: 10px;
cursor: pointer;
`;