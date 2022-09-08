import styled from 'styled-components';

export const SearchContainer = styled.div`
    display: flex;
    position: relative;
    gap: 3px;
    max-height: 40px;
`;

export const InputContainer = styled.div`
    position: relative;
`;

export const Input = styled.input`
    padding : 2px 15px;
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
    padding: 0 10px;
    border-radius: 15px;
    background: coral;
    font-weight: bold;
`;

export const Container = styled.section`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    gap: 5px;
    
    @media (max-width: 707px) {
        gap: 15px;
    }
`;

export const Wrapper = styled.section`
    margin-top: 20px;
    padding: 15px;
    box-shadow: 10px 10px 200px 0px coral inset;
    border-radius: 15px;
`

export const Title = styled.section`
    font-weight: bold;
    padding-left: 10px;
`;

export const Content = styled.section`
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    margin-top: 20px;
    gap: 6px;
`;

export const Main = styled.div`
    padding: 0 40px;

    @media (max-width: 401px) {
        padding: 0;
    }
`;