import React, { useState } from 'react';

import { Container, Form } from './styled';

function LoginForm({ adminUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = e => {
        e.preventDefault();
        if (username === adminUser.username && password === adminUser.password) {

        } else {
            alert("Please enter a valid user");
            setUsername("");
            setPassword("");
        }
    }
    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <h1>Welcome Weather App</h1>
                <div className="form-group">
                    <label htmlFor="username">User Name:</label>
                    <input type="text" value={username} name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Login" />
                </div>
            </Form>
        </Container>
    )
}

export default LoginForm;
