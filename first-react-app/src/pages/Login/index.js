import React from 'react';

import LoginForm from "../../components/LoginForm";
import { PageContainer } from "./styled";

function Login() {
    const adminUser = { username: "admin", password: "admin" };

    return (
        <PageContainer>
            <LoginForm adminUser={adminUser} />
        </PageContainer >
    )
}

export default Login;
