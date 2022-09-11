import React from 'react';
import { useNavigate } from "react-router-dom";

import { Wrapper, Logout } from './styled';
import Profile from '../../icons/profile.png';
import { clearStorage } from '../../utils/helpers';

function Header({ title }) {
    const navigate = useNavigate();

    const logoutButtonClick = () => {
        clearStorage();
        navigate("../", { refresh: true });
    }
    return (
        <Wrapper>
            {title}
            <img src={Profile} alt="Profile"></img>
            <Logout onClick={logoutButtonClick}>Logout</Logout>

        </Wrapper >
    )
};

export default Header;
