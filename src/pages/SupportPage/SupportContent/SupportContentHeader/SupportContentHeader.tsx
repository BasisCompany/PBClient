import { useState, SyntheticEvent, useEffect } from "react";

import { Box } from "@mui/material";

import { useLocation } from "react-router";

import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import FormatListBulletedRoundedIcon from "@mui/icons-material/FormatListBulletedRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import { useMobileDevice } from "../../../../hooks/useMobileDevice";
import { CustomTab, CustomTabs } from "../../../../UI/Tabs";

const supportTabsItems = [
    {
        id: 0,
        to: "",
    },
    {
        id: 1,
        to: "questions",
    },
    {
        id: 2,
        to: "feedback",
    },
];

const supportTabsItemsMobile = [
    {
        id: 0,
        to: "",
    },
    {
        id: 1,
        to: "feedback",
    },
];

const getPathId = (path: string, isMobile: boolean): number => {
    const lastUrlSegment = path.split("/").pop();
    const tabsItem = isMobile ? supportTabsItemsMobile : supportTabsItems;
    return lastUrlSegment === "support"
        ? 0
        : tabsItem.find((el) => el.to === lastUrlSegment)?.id || 1;
};

export const SupportContentHeader = () => {
    const location = useLocation();

    const isMobile = useMobileDevice();

    const [value, setValue] = useState<number>(
        getPathId(location.pathname, isMobile)
    );

    useEffect(() => {
        setValue(getPathId(location.pathname, isMobile));
    }, [location.pathname]);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                //bgcolor: "#645",
                display: "flex",
                justifyContent: "center",
                mb: "15px",
            }}
        >
            <CustomTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
            >
                <CustomTab
                    to=""
                    icon={
                        <QuizRoundedIcon
                            sx={{
                                fontSize: 25,
                            }}
                        />
                    }
                    iconPosition="start"
                    label="Помощь"
                />
                {!isMobile && (
                    <CustomTab
                        to="questions"
                        icon={
                            <FormatListBulletedRoundedIcon
                                sx={{
                                    fontSize: 25,
                                }}
                            />
                        }
                        iconPosition="start"
                        label={"Список вопросов"}
                    />
                )}
                <CustomTab
                    to="feedback"
                    icon={
                        <LightbulbRoundedIcon
                            sx={{
                                fontSize: 25,
                            }}
                        />
                    }
                    iconPosition="start"
                    label="Задать вопрос"
                />
            </CustomTabs>
        </Box>
    );
};
