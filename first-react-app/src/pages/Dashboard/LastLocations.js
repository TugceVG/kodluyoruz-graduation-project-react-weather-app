import React, { useEffect, useState } from 'react';

import Card from '../../components/Card';
import { getFromStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';
import {
    Title,
    Content,
    Wrapper
} from './styled';

function LastLocations() {
    const [locations, setLocations] = useState(getFromStorage(STORAGE_KEYS.SEARCHED_LOCATIONS) || []);

    console.log(locations)
    return (
        <Wrapper>
            <Title>
                <label> Last Searches ... </label>
            </Title>
            <Content>
                <Card location={locations[0]} />
                <Card location={locations[1]} />
                <Card location={locations[2]} />
            </Content>
        </Wrapper>
    )
}

export default LastLocations;
