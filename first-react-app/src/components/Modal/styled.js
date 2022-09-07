import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1100px;
    background: LightSalmon;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`
export const CloseBtn = styled.button`
    position: absolute;
    right: 2px;
    top: 2px;
    border: none;
    font-weight: bold;
    border-radius: 15px;
`
export const Day = styled.div`
    display: flex;
    width: 150px;
    height: 150px;
    background: lightgray;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`
export const DaysOfWeek = styled.div`
   display:flex;
   gap: 5px;

`
export const Body = styled.div`
   display:flex;
   flex-direction: column;

`
export const MoreInfoWrapper = styled.div`
    display:flex;
    justify-content: space-between;
    padding-bottom: 20px;
`
export const MoreInfo = styled.section`
    
`
