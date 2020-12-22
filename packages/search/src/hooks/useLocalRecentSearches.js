import { useState } from 'react';

const useLocalData = (key) => {
    const data = localStorage.getItem(key);
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }
    return undefined;
};

const useLocalRecentSearches = (key) => {
    const sessionData = useLocalData(key);
    const [persistentState, setState] = useState(Array.isArray(sessionData) ? sessionData : []);
    const setPersistentState = (newValue) => {
        if (typeof newValue === 'string') {
            const newArray = [...persistentState];
            newArray.unshift(newValue);
            const values = newArray.slice(0, 5);
            localStorage.setItem(key, JSON.stringify(values));
            setState(values);
        }
    };
    return [persistentState, setPersistentState];
};

export default useLocalRecentSearches;
