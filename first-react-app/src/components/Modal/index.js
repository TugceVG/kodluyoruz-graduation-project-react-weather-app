import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../GlobalState';
import { BASE_URL, WEATHER_API_KEY } from '../../utils/constants';
import { ModalContainer, ModalWrapper, CloseBtn, DaysOfWeek, Body, Day, MoreInfo, MoreInfoWrapper } from './styled';
import { DAYS } from '../../utils/constants';

function Modal({ location }) {
    const { isModalOpen, setIsModalOpen } = useContext(GlobalContext);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${BASE_URL}/forecast?units=metric&q=${location},tr&APPID=${WEATHER_API_KEY}`)
            .then((response) => response.json())
            .then((result) => setData(result))
            .catch((err) => console.error(err));
    }, [location]);

    if (!isModalOpen) { return null }
    if (!data || !data.list) { return null }

    const indexList = [0, 8, 16, 24, 32];
    const fiveDays = data.list.filter((item, index) => indexList.includes(index));
    const firstDay = fiveDays[0];
    const getDayText = (date) => DAYS[new Date(date * 1000).getDay()];

    return (
        <ModalWrapper>
            <ModalContainer>
                <CloseBtn onClick={() => setIsModalOpen(false)}> X </CloseBtn>
                <div className="title"><h1>{location.toUpperCase()}</h1></div>
                <Body>
                    <MoreInfoWrapper>
                        <MoreInfo>{`Humidity: ${firstDay.main.humidity}`}</MoreInfo>
                        <MoreInfo>{`Wind Speed: ${firstDay.wind.speed}`}</MoreInfo>
                        <MoreInfo>{`Visibility: ${firstDay.visibility}`}</MoreInfo>
                    </MoreInfoWrapper>

                    <DaysOfWeek>
                        {
                            fiveDays.map((day) =>
                                <Day>
                                    <span>{getDayText(day.dt)}</span>
                                    <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} />
                                    <span>{day.weather[0].main}</span>
                                    <span>{day.main.temp}</span>
                                </Day>)
                        }
                    </DaysOfWeek>
                </Body>
            </ModalContainer>

        </ModalWrapper>
    )
}

export default Modal

