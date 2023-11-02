import { useState, useEffect, SyntheticEvent } from "react";
import { useLocation } from "react-router";

const profileTabs = ["", "comments", "notifications", "payments", "settings"];

const getPathId = (path: string, tabs: string[]): number => {
    const lastUrlSegment = path.split("/").pop();
    const index = tabs.findIndex((url) => url === lastUrlSegment);
    return index === -1 ? 0 : index;
};

export const useTabs = (tabs: string[]) => {
    const location = useLocation();

    const [value, setValue] = useState<number>(
        getPathId(location.pathname, tabs)
    );

    useEffect(() => {
        setValue(getPathId(location.pathname, tabs));
    }, [location.pathname, tabs]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return { value, handleChange };
};
