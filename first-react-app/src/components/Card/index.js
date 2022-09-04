import React, { useState, useEffect } from 'react'

import { CardWrapper, CardHeader, CardBody } from './styled';
import { BASE_URL, WEATHER_API_KEY } from '../../utils/constants';

function Card({ location }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (location) {
            fetch(`${BASE_URL}/weather?units=metric&q=${location},tr&APPID=${WEATHER_API_KEY}`)
                .then((response) => response.json())
                .then((result) => { setData(result) });
        }
    }, [location]);

    if (!data) {
        return (
            <CardWrapper>
                <CardHeader>
                    No data
                </CardHeader>
            </CardWrapper>
        )
    }

    return (
        <CardWrapper>
            <CardHeader>
                {data.name}
            </CardHeader>
            <CardBody>
                {data.main.temp}
            </CardBody>
        </CardWrapper>
    )
}

export default Card;
