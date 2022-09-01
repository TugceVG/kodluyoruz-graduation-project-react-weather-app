export function getFromStorage(key) {
    const value = window.localStorage.getItem(key);

    return JSON.parse(value);
}

export function saveToStorage(key, value) {
    const stringifiedValue = JSON.stringify(value);

    window.localStorage.setItem(key, stringifiedValue);
}
