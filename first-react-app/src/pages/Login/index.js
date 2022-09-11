import React from 'react';

import LoginForm from "../../components/LoginForm";
import { PageContainer } from "../../components/PageContainer";

function Login() {
    const adminUser = { username: "admin", password: "admin" };

    return (
        <PageContainer centered={true}>
            <LoginForm adminUser={adminUser} />
        </PageContainer >
    )
}

export default Login;
