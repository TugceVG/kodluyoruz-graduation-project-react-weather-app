import React from 'react'

import { CardWrapper, CardHeader, CardBody } from './styled';

function Card({ location, weatherDegree }) {
    return (
        <CardWrapper>
            <CardHeader>
                {location}
            </CardHeader>
            <CardBody>
                {weatherDegree}
            </CardBody>
        </CardWrapper>
    )
}

export default Card;
