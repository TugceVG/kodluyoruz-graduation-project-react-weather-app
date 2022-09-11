import styled from 'styled-components';

export const Form = styled.form`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 3px solid grey;
    border-radius: 10px;
    background-color: LightBlue;

    @media (min-width: 550px){
        min-width: 500px;
    }
    
    @media (max-width: 290px){
        padding: 5px;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: space-between;
    align-items: center;
    width: 50%;

    @media (max-width: 550px){
        width: 100%;
        gap: 15px;
    }
`;

export const Input = styled.input`
   border: none;
   border-radius: 10px;
   padding: 3px;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    width: 50%;
    justify-content: flex-end;
`;

export const Button = styled.button`
    border: 3px solid PaleTurquoise;
    border-radius: 10px;
    background: #fff;
    padding: 3px 5px;
    font-weight: bold;
    color: grey;
`;