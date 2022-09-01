import styled from 'styled-components';

export const SearchContainer = styled.section`
    display: flex;
    position: relative;
    gap: 3px;
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const Input = styled.input`
    padding : 2px 4px;
    height: 32px;
    width: 200px;
    border-radius: 15px;
`;

export const SearchImage = styled.img`
    position: absolute;
    right: 5px;
    height: 32px;
    top: 4px;
`;

export const Button = styled.button`
    border-radius: 15px;
    background: coral;
    font-weight: bold;
`;
