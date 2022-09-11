import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    box-shadow: 10px 10px 200px 0px Lightgrey inset;
    font-size: 20px;
    font-weight: bold;
    border: 3px solid grey;
    border-radius: 15px;
    gap: 30px;
    padding: 25px;
    min-width: 220px;
    min-height: 200px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const Button = styled.button`
    border: 3px solid lightblue;
    border-radius: 10px;
    background: #fff;
    padding: 3px 5px;
    font-weight: bold;
    color: grey;
`;