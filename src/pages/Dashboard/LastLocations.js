import React, { useContext } from 'react';

import Card from '../../components/Card';
import { GlobalContext } from '../../GlobalState';
import {
    Title,
    Content,
    Wrapper
} from './styled';

function LastLocations() {
    const { lastLocations } = useContext(GlobalContext);

    return (
        <Wrapper>
            <Title>
                <label> Last Searches ... </label>
            </Title>
            <Content>
                <Card location={lastLocations[0]} />
                <Card location={lastLocations[1]} />
                <Card location={lastLocations[2]} />
            </Content>
        </Wrapper>
    )
}

export default LastLocations;
