import React from 'react';

import SearchIcon from '../../icons/search-icon.svg';
import Header from '../../components/Header';
import Card from '../../components/Card'
import {
    SearchContainer,
    SearchImage,
    InputContainer,
    Input,
    Button
} from './styled'


function Dashboard() {
    return (
        <div>
            <Header title="Dashboard page" />
            <SearchContainer>
                <InputContainer>
                    <SearchImage src={SearchIcon} />
                    <Input type="text" id="search" placeholder='Search...' />
                </InputContainer>
                <Button>Get Weather</Button>
            </SearchContainer>
            <Card location="Istanbul" weatherDegree="33 Derece" />
        </div>
    )
}

export default Dashboard;
