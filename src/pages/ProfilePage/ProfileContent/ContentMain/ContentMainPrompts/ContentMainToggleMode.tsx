import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import { useState } from "react";
import { CustomToggleButtonGroup } from "./CustomToggleButtonGroup";
import { ToggleButton } from "@mui/material";

export const ContentMainToggleMode = () => {
    const [alignment, setAlignment] = useState("left");

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
    return (
        <CustomToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
        >
            <ToggleButton
                value="left"
                aria-label="left aligned"
                sx={{ height: "33px", width: "33px" }}
            >
                <GridViewRoundedIcon sx={{ fontSize: 24 }} />
            </ToggleButton>

            <ToggleButton
                value="center"
                aria-label="centered"
                sx={{ height: "33px", width: "33px" }}
            >
                <ViewAgendaRoundedIcon sx={{ fontSize: 24 }} />
            </ToggleButton>
        </CustomToggleButtonGroup>
    );
};
