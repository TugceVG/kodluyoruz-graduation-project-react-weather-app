import styled from 'styled-components';

export const CardWrapper = styled.div`
    position: absolute;
    bottom: 50%;
    right: 50%;
    display: flex;
    justify-content:center;
    flex-direction: column;
    width: 300px;
    height: 300px;
    background: lightgray;
    font-size: 20px;
    font-weight: bold;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CardBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`