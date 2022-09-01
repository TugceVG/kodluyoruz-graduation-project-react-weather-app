import styled from 'styled-components';

export const Form = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    gap: 10px;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    background-color: coral;
`;

export const InputWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
`;
