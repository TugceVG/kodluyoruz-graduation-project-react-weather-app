import React from 'react';

import Login from '../../pages/Login';
import { getFromStorage } from '../../utils/helpers';
import { STORAGE_KEYS } from '../../utils/constants';

const withAuth = WrappedComponent => () => {
    const isLoggedIn = getFromStorage(STORAGE_KEYS.IS_LOGGED_IN);

    if (!isLoggedIn) {
        return (
            <Login />
        )
    }

    return (
        <WrappedComponent />
    )
};

export default withAuth;