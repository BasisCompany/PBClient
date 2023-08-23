import { Box, List } from "@mui/material";
import { Outlet } from "react-router";

import { CustomListItem } from "./CustomListItem";
import { useLocation } from "react-router";

export const SupportContentMainQuestions = () => {
    console.log("render");
    return (
        <Box
            sx={{
                //bgcolor: "#645",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    borderRadius: "5px",
                    minWidth: "205px",
                    mr: "15px",
                    pr: "8px",
                    pl: "8px",
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                }}
            >
                <List>
                    <CustomListItem path="" title="Общие вопросы" />
                    <CustomListItem path="security" title="Безопасность" />
                    <CustomListItem path="monetization" title="Монетизация" />
                    <CustomListItem path="profile" title="Настройки профиля" />
                    <CustomListItem
                        path="payments"
                        title="Платежи и переводы"
                    />
                    <CustomListItem path="comments" title="Комментарии" />
                </List>
            </Box>

            <Box sx={{ width: "775px", bgcolor: "#653" }}>
                <Outlet />
            </Box>
        </Box>
    );
};
