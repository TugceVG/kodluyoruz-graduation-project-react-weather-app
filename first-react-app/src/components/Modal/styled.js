import styled from 'styled-components';

export const ModalWrapper = styled.div`
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 508px) {
     align-items: baseline;
     margin-top: 15px;
    }
`;

export const ModalContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: LightSalmon;
    padding: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;

export const CloseBtn = styled.button`
    position: absolute;
    right: 7px;
    top: 7px;
    border: none;
    font-weight: bold;
    border-radius: 15px;
`;

export const Day = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 150px;
    height: 150px;
    background: lightgray;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    padding: 10px 0;


   @media (max-width: 508px) {
    width: 100%
   }
`;

export const DaysOfWeek = styled.div`
   display: flex;
   flex-flow: wrap;
   gap: 5px;
`;

export const Body = styled.div`
   display:flex;
   flex-direction: column;
`;

export const MoreInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    gap: 20px;
    padding: 10px;
`;

export const MoreInfo = styled.section``;
