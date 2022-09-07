import React, { useState, useEffect, useContext } from 'react'

import { CardWrapper, CardHeader, CardBody } from './styled';
import { BASE_URL, WEATHER_API_KEY } from '../../utils/constants';
import { getFromStorage, saveToStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';
import { GlobalContext } from '../../GlobalState';

function Card({ location, shouldSave = false, showDetails = false }) {
    const [data, setData] = useState(null);
    const { locationsHandler, setIsModalOpen } = useContext(GlobalContext);

    useEffect(() => {
        if (location) {
            fetch(`${BASE_URL}/weather?units=metric&q=${location},tr&APPID=${WEATHER_API_KEY}`)
                .then((response) => response.json())
                .then((result) => {
                    setData(result);

                    if (shouldSave && result.cod === 200) {
                        const searchedLocations = getFromStorage(STORAGE_KEYS.SEARCHED_LOCATIONS) || [];
                        searchedLocations.push(location);

                        if (searchedLocations.length > 3) {
                            searchedLocations.shift();
                        }

                        saveToStorage(STORAGE_KEYS.SEARCHED_LOCATIONS, searchedLocations);
                        locationsHandler(searchedLocations);
                    }
                })
                .catch((err) => console.error(err));
        }
    }, [location, shouldSave]);

    if (!data || !data.main) {
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
                {showDetails &&
                    <button className="openModalBtn" onClick={() => { setIsModalOpen(true) }}>Detail about the city</button>
                }
            </CardBody>
        </CardWrapper>
    )
}

export default Card;
