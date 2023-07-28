import { Box } from "@mui/material";
import React from "react";
import { ContentTabs } from "./ContentTabs";
import { ContentTab } from "./ContentTab";
import { contentTabsItems } from "./contentTabsItems";

export const ContentHeader = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
                {contentTabsItems.map((item) => (
                    <ContentTab {...item} />
                ))}
            </ContentTabs>
        </Box>
    );
};
