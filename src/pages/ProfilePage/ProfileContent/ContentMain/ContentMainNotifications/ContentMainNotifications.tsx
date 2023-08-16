import ChecklistIcon from "@mui/icons-material/Checklist";
import TuneIcon from "@mui/icons-material/Tune";
import { Box, IconButton, SelectChangeEvent, Tooltip } from "@mui/material";
import { useState } from "react";
import {
    CustomMenuItem,
    CustomSelect,
} from "../ContentMainPrompts/ContentMainSelect";
import { ContentMainNotification } from "./ContentMainNotification";

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
                <CustomSelect
                    sx={{
                        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input":
                            {
                                pl: 1,
                            },
                    }}
                    value={select}
                    onChange={handleChange}
                >
                    <CustomMenuItem value="all">Все</CustomMenuItem>
                    <CustomMenuItem value="unread">
                        Непрочитанные
                    </CustomMenuItem>
                    <CustomMenuItem value="read">Прочитанные</CustomMenuItem>
                </CustomSelect>
                <Box
                    sx={{
                        backgroundColor: "primary.main",
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
