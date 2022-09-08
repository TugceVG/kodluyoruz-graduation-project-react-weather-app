import styled from 'styled-components';

export const CardWrapper = styled.div`
    display: flex;
    justify-content:center;
    flex-direction: column;
    background: lightgray;
    font-size: 20px;
    font-weight: bold;
    border: 1px solid rgba(0, 0, 0, 0.2);
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