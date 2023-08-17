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

import { ContentMainNotification } from "./ProfileNotification";
import { PagePagination } from "../../../../../UI/PagePagination";
import { CustomSelect } from "../../../../../UI/Select/CustomSelect";
import { CustomSelectMenuItem } from "../../../../../UI/Select/CustomSelectMenuItem";

export const ContentMainNotifications = () => {
    const [select, setSelect] = useState("unread");

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
                    <CustomSelectMenuItem value="unread">
                        <ListItemIcon>
                            <DoneRoundedIcon sx={{ fontSize: "19px" }} />
                        </ListItemIcon>
                        Непрочитанные
                    </CustomSelectMenuItem>
                    <CustomSelectMenuItem value="read">
                        <ListItemIcon>
                            <DoneAllRoundedIcon sx={{ fontSize: "19px" }} />
                        </ListItemIcon>
                        Прочитанные
                    </CustomSelectMenuItem>
                    <CustomSelectMenuItem value="all">
                        <ListItemIcon>
                            <SortRoundedIcon sx={{ fontSize: "19px" }} />
                        </ListItemIcon>
                        Все уведомления
                    </CustomSelectMenuItem>
                </CustomSelect>
                <Box
                    sx={{
                        //backgroundColor: "primary.main",
                        borderRadius: "4px",
                    }}
                >
                    <Tooltip title="Настройки" disableInteractive>
                        <IconButton
                            sx={{
                                borderRadius: "4px",
                                ":hover": {
                                    backgroundColor: "rgba(153, 51, 255,0.4)",
                                },
                            }}
                        >
                            <TuneIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Прочитать всё" disableInteractive>
                        <IconButton
                            sx={{
                                borderRadius: "4px",
                                ":hover": {
                                    backgroundColor: "rgba(153, 51, 255,0.4)",
                                },
                            }}
                        >
                            <ChecklistIcon />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Box>
            <Box>
                {[...new Array(10)].map((_, i) => (
                    <ContentMainNotification key={i} i={i} />
                ))}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "end",
                    mt: 2,
                }}
            >
                <PagePagination pathTo="/profile/notifications" />
            </Box>
        </>
    );
};
