import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { setItem, getItem } from "../storage";

export const useLocalStorageState = <T,>(
    initialValue: T,
    key: string
): [T, Dispatch<SetStateAction<T>>] => {
    const getValue = (): T => {
        const storageValue = getItem(key);
        if (storageValue) {
            return JSON.parse(storageValue) as T;
        }
        return initialValue;
    };

    const [value, setValue] = useState<T>(getValue);

    useEffect(() => {
        setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};
