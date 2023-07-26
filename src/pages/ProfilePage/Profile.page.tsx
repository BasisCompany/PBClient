import * as React from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileWrapper } from "./ProfileWrapper";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";

export const ProfilePage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <ProfileWrapper>
            <ProfileHeader />
            <Box sx={{ display: "flex" }}>
                <ProfileStatistic />
                <Box
                    sx={{
                        bgcolor: "#966",
                        position: "relative",
                        width: "calc(80% - 15px)",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "15px",
                    }}
                >
                    <Box
                        sx={{
                            bgcolor: "#654",
                        }}
                    >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons={false}
                            aria-label="scrollable prevent tabs example"
                        >
                            <Tab label="Item One" />
                            <Tab label="Item Two" />
                            <Tab label="Item Three" />
                            <Tab label="Item Four" />
                            <Tab label="Item Five" />
                            <Tab label="Item Six" />
                            <Tab label="Item Seven" />
                        </Tabs>
                    </Box>
                </Box>
            </Box>
        </ProfileWrapper>
    );
};
