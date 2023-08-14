import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Box } from "@mui/material";
import { ContentTabs } from "./ContentTabs";
import { ContentTab } from "./ContentTab";
import { contentTabsItems } from "./contentTabsItems";

const getPathId = (path: string): number => {
    const lastUrlSegment = path.split("/").pop();
    return lastUrlSegment === "profile"
        ? 0
        : contentTabsItems.find((el) => el.to === lastUrlSegment)?.id || 0;
};

export const ContentHeader = () => {
    const location = useLocation();
    console.log(getPathId(location.pathname));

    const [value, setValue] = useState<number>(getPathId(location.pathname));

    useEffect(() => {
        setValue(getPathId(location.pathname));
    }, [location.pathname]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                //bgcolor: "#684",
                display: "flex",
                justifyContent: "center",
                //borderRadius: "15px",
                //height: "80px",
            }}
        >
            <ContentTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
            >
                {contentTabsItems.map(({ id, to, ...item }) => (
                    <ContentTab key={id} to={to} {...item} />
                ))}
            </ContentTabs>
        </Box>
    );
};
