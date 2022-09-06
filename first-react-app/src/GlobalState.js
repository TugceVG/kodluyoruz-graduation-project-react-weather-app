import React, { useState, createContext } from "react";
import { getFromStorage } from './utils/helpers';
import { STORAGE_KEYS } from './utils/constants'

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const initialLocations = getFromStorage(STORAGE_KEYS.SEARCHED_LOCATIONS) || [];

    const [lastLocations, setLastLocations] = useState(initialLocations);

    const locationsHandler = (locations) => setLastLocations(locations);

    return (
        <GlobalContext.Provider value={{ lastLocations, locationsHandler }}>
            {props.children}
        </GlobalContext.Provider>
    );
};