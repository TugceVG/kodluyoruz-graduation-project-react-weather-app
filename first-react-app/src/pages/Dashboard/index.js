import React, { useState, useRef } from 'react';

import SearchIcon from '../../icons/search-icon.svg';
import Header from '../../components/Header';
import Card from '../../components/Card'
import LastLocations from './LastLocations';
import { getFromStorage, saveToStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';

import {
    SearchContainer,
    SearchImage,
    InputContainer,
    Input,
    Button,
    Container,
    Main
} from './styled';

function Dashboard() {
    const inputRef = useRef();
    const [location, setLocation] = useState("");

    const handleButtonClick = (e) => {
        setLocation(inputRef.current.value);

        const searchedLocations = getFromStorage(STORAGE_KEYS.SEARCHED_LOCATIONS) || [];
        searchedLocations.push(inputRef.current.value);

        if (searchedLocations.length > 3) {
            searchedLocations.shift();
        }

        saveToStorage(STORAGE_KEYS.SEARCHED_LOCATIONS, searchedLocations);
        inputRef.current.value = "";
    }

    return (
        <Main>
            <Header title="Dashboard page" />
            <Container>
                <SearchContainer>
                    <InputContainer>
                        <SearchImage src={SearchIcon} />
                        <Input type="text" ref={inputRef} placeholder='Search...' />
                    </InputContainer>
                    <Button onClick={handleButtonClick}>Get Weather</Button>
                </SearchContainer>
                <Card location={location} />
            </Container>
            <LastLocations />
        </Main>
    )
}

export default Dashboard;
