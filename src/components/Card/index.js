import React, { useState, useEffect, useContext } from 'react'

import { CardWrapper, CardHeader, CardBody, Button } from './styled';
import { BASE_URL, WEATHER_API_KEY } from '../../utils/constants';
import { getFromStorage, saveToStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';
import { GlobalContext } from '../../GlobalState';

function Card({ location, shouldSave = false, showDetails = false }) {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { locationsHandler, setIsModalOpen } = useContext(GlobalContext);

    useEffect(() => {
        if (location) {
            setIsLoading(true);
            fetch(`${BASE_URL}/weather?units=metric&q=${location},tr&APPID=${WEATHER_API_KEY}`)
                .then((response) => response.json())
                .then((result) => {
                    setData(result);
                    setIsLoading(false);

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
                .catch((err) => {
                    console.error(err);
                    setIsLoading(false);
                });
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
                <span>{data.main.temp}</span>
                <span>{showDetails &&
                    <Button className="openModalBtn" onClick={() => { setIsModalOpen(true) }}>Detail about the city</Button>
                }</span>
            </CardBody>
        </CardWrapper>
    )
}

export default Card;
