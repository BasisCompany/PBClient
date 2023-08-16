import ChecklistIcon from "@mui/icons-material/Checklist";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import TuneIcon from "@mui/icons-material/Tune";
import {
    Box,
    IconButton,
    ListItemIcon,
    SelectChangeEvent,
    Tooltip,
} from "@mui/material";
import { useState } from "react";
import {
    CustomMenuItem,
    CustomSelect,
} from "../ContentMainPrompts/ContentMainSelect";
import { ContentMainNotification } from "./ContentMainNotification";
import { CustomPagination } from "./CustomPagintaion";

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
                {[...new Array(10)].map((_, i) => (
                    <ContentMainNotification key={i} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    mt: 2,
                }}
            >
                <CustomPagination pathTo="/profile/notifications" />
            </Box>
        </>
    );
};
