import React from 'react';

import { Wrapper } from './styled';

function Header({ title }) {
    return (
        <Wrapper>
            {title}
        </Wrapper>
    )
};

export default Header;
