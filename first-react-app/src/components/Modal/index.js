import React, { useContext } from 'react'
import { GlobalContext } from '../../GlobalState';
import { ModalContainer, ModalWrapper, CloseBtn, DaysOfWeek, Body, Day, MoreInfo, MoreInfoWrapper, Line } from './styled';

function Modal({ location }) {
    const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);

    if (!isModalOpen) { return null }
    return (
        <ModalWrapper>
            <ModalContainer>
                <CloseBtn onClick={() => setIsModalOpen(false)}> X </CloseBtn>
                <div className="title"><h1>{location.toUpperCase()}</h1></div>
                <Body>
                    <MoreInfoWrapper>
                        <MoreInfo>Humidity :</MoreInfo>
                        <MoreInfo>Wind :</MoreInfo>
                        <MoreInfo>Visibility :</MoreInfo>
                    </MoreInfoWrapper>

                    <DaysOfWeek>
                        <Day>Mon</Day>
                        <Day>Tue</Day>
                        <Day>Wed</Day>
                        <Day>Thu</Day>
                        <Day>Fri</Day>
                        <Day>Sat</Day>
                        <Day>Sun</Day>
                    </DaysOfWeek>
                </Body>
            </ModalContainer>

        </ModalWrapper>
    )
}

export default Modal

