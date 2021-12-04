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

const useStorageState = ({ key, defaultValue }) => {
    const localData = useLocalData(key);
    const [persistentState, setState] = useState(
        localData === undefined ? defaultValue : localData,
    );

    const setPersistentState = (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        setState(newValue);
    };

    return [persistentState, setPersistentState];
};

export default useStorageState;
