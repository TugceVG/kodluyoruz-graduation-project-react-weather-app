import styled from "styled-components";
import img from './img.jpg';

export const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: ${props => props.centered ? "center" : "unset"};
    height: 100vh;
    background-color: grey;
    background: url(${img}); 
    background-size: contain;

    @media (max-width: 800px) {
        height: ${props => props.centered ? "100vh" : "unset"};
    }
`;
