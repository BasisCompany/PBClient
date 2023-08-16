import ChecklistIcon from "@mui/icons-material/Checklist";
import TuneIcon from "@mui/icons-material/Tune";
import {
    Box,
    IconButton,
    SelectChangeEvent,
    Tooltip,
    ListItemIcon,
} from "@mui/material";
import { useState } from "react";
import {
    CustomMenuItem,
    CustomSelect,
} from "../ContentMainPrompts/ContentMainSelect";
import { ContentMainNotification } from "./ContentMainNotification";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";

export const ContentMainNotifications = () => {
    const [select, setSelect] = useState("all");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <CustomSelect value={select} onChange={handleChange}>
                    <CustomMenuItem value="all">
                        <ListItemIcon>
                            <SortRoundedIcon />
                        </ListItemIcon>
                        Все уведомления
                    </CustomMenuItem>
                    <CustomMenuItem value="unread">
                        <ListItemIcon>
                            <DoneRoundedIcon />
                        </ListItemIcon>
                        Непрочитанные
                    </CustomMenuItem>
                    <CustomMenuItem value="read">
                        <ListItemIcon>
                            <DoneAllRoundedIcon />
                        </ListItemIcon>
                        Прочитанные
                    </CustomMenuItem>
                </CustomSelect>
                <Box
                    sx={{
                        //backgroundColor: "primary.main",
                        borderRadius: "4px",
                    }}
                >
                    <Tooltip title="Настройки" disableInteractive>
                        <IconButton sx={{ borderRadius: "4px" }}>
                            <TuneIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Прочитать всё" disableInteractive>
                        <IconButton sx={{ borderRadius: "4px" }}>
                            <ChecklistIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Box>
                {[...new Array(5)].map((_) => (
                    <ContentMainNotification />
                ))}
            </Box>
        </>
    );
};
