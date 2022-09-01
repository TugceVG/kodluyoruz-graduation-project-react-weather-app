import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Form, InputWrapper, ButtonWrapper } from './styled';
import { saveToStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';

function LoginForm({ adminUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = e => {
        e.preventDefault();
        if (username === adminUser.username && password === adminUser.password) {
            saveToStorage(STORAGE_KEYS.IS_LOGGED_IN, true);
            navigate("../dashboard", { replace: true });
        } else {
            alert("Please enter a valid user");
            setUsername("");
            setPassword("");
        }
    }
    return (
        <Form onSubmit={submitHandler}>
            <h1>Welcome Weather App</h1>
            <InputWrapper>
                <label htmlFor="username">User Name:</label>
                <input type="text" value={username} name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
            </InputWrapper>
            <InputWrapper>
                <label htmlFor="password">Password:</label>
                <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
            </InputWrapper>
            <ButtonWrapper>
                <input type="submit" value="Login" />
            </ButtonWrapper>
        </Form>
    )
}

export default LoginForm;
