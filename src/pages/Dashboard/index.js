import React, { useState, useRef } from 'react';

import SearchIcon from '../../icons/search-icon.svg';
import Header from '../../components/Header';
import Card from '../../components/Card'
import LastLocations from './LastLocations';
import Modal from '../../components/Modal';
import { PageContainer } from '../../components/PageContainer';
import withAuth from '../../components/withAuth';

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
    const [shouldSave, setShouldSave] = useState(false);

    const handleButtonClick = (e) => {
        setLocation(inputRef.current.value);
        inputRef.current.value = "";
        setShouldSave(true);
    }

    return (
        <PageContainer>
            <Main>
                <Header title="Weather App" />
                <Container>
                    <SearchContainer>
                        <InputContainer>
                            <SearchImage src={SearchIcon} />
                            <Input type="text" ref={inputRef} placeholder='Search...' />
                        </InputContainer>
                        <Button onClick={handleButtonClick}>Get Weather</Button>
                    </SearchContainer>
                    <Card showDetails={true} location={location} shouldSave={shouldSave} />
                </Container>
                <LastLocations location={location} shouldSave={shouldSave} />
                <Modal location={location} />
            </Main>
        </PageContainer>
    )
}

export default withAuth(Dashboard);
