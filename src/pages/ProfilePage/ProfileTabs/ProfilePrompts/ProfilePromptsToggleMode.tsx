import { useState } from "react";
import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";

const CustomToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        transition: "all 0.2s ease-out",
        margin: 0,
        border: 0,
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:first-of-type": {
            marginRight: "5px",
            borderRadius: theme.shape.borderRadius,
        },

        "&:hover:not(.Mui-selected)": {
            backgroundColor: "rgba(153, 51, 255,0.2)",
            transition: "all 0.2s ease-in",
            "& .MuiListItemIcon-root": {},
        },
        "&.Mui-selected": {
            backgroundColor: "rgba(153, 51, 255,0.4)",
            "&:hover": {
                backgroundColor: "rgba(153, 51, 255,0.4)",
            },
        },
    },
}));

export const ProfilePromptsToggleMode = () => {
    const [alignment, setAlignment] = useState("left");

    const handleAlignment = (
        _: React.MouseEvent<HTMLElement>,
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
