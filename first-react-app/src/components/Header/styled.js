import styled from 'styled-components';

export const Wrapper = styled.div` 
    display: flex;
    position: relative;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: LightBlue;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    border-radius: 15px;
`;

export const Logout = styled.button` 
   position: absolute;
   right: 0px;
   top: 60px;
   border-radius: 15px;
   font-size: 10px;
   border: none;
   background: transparent;
   font-weight: bold;
   cursor: pointer;
`;

