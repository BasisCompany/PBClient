import { FC } from "react";
import {
    Box,
    ToggleButton,
    ToggleButtonGroup,
    ToggleButtonProps,
    styled,
} from "@mui/material";
import { profilePromptsLineListContent } from "./profilePromptsLineListContent";

interface CustomToggleButtonProps extends ToggleButtonProps {
    colorbutton: string | "0,0,0";
}

const CustomToggleButton = styled((props: CustomToggleButtonProps) => (
    <ToggleButton {...props} />
))(({ theme, colorbutton }) => ({
    width: "120px",
    height: "60px",
    borderWidth: "0px",
    borderLeft: "none !important",
    borderRight: "none !important",
    transition: "all 0.2s ease-out",
    color: `rgba(${colorbutton}, 0.5)`,
    "& .MuiSvgIcon-root": {
        fontSize: "2rem",
        fill: theme.palette.text.secondary,
        [theme.breakpoints.down("md")]: {
            fontSize: "1.8rem",
        },
    },
    "&:hover": {
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
        transition: "all 0.2s ease-out",
        [theme.breakpoints.down("md")]: {
            borderBottom: "0px",
        },
    },
    "&:hover:not(.Mui-selected)": {
        color: `rgba(${colorbutton}, 0.5)`,
        borderBottom: `5px solid rgba(${colorbutton}, 0.5)`,
        backgroundColor: "transparent",
        transition: "all 0.2s ease-in",
        [theme.breakpoints.down("md")]: {
            borderBottom: "0px",
        },
    },
    "&.Mui-selected": {
        transition: "all 0.2s ease-in",
        backgroundColor: "transparent",
        marginLeft: "none",
        color: `rgba(${colorbutton}, 1)`,
        "&:hover": {
            color: `rgba(${colorbutton}, 1)`,
            backgroundColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
            fill: `rgba(${colorbutton}, 1)`,
        },
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
        [theme.breakpoints.down("md")]: {
            borderBottom: "0px",
        },
    },
    "&.MuiToggleButton-root:not(:first-of-type)": {
        marginLeft: "0",
    },
    [theme.breakpoints.down("md")]: {
        borderWidth: "0px",
        width: "25%",
        fontSize: "0.7rem",
    },
}));

interface ContentMainModelsProps {
    model: Array<string>;
    handleModel: (
        event: React.MouseEvent<HTMLElement>,
        newModel: string[]
    ) => void;
}

export const ProfilePromptsModels: FC<ContentMainModelsProps> = ({
    model,
    handleModel,
}) => {
    return (
        <Box
            sx={{
                mb: "15px",
            }}
        >
            <ToggleButtonGroup
                value={model}
                onChange={handleModel}
                sx={{ width: "100%", justifyContent: "center" }}
            >
                {profilePromptsLineListContent.map((item) => (
                    <CustomToggleButton
                        key={item.id}
                        value={item.title}
                        colorbutton={item.color}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            width: {
                                xs: `${
                                    100 / profilePromptsLineListContent.length
                                }%`,
                                md: "120px",
                            },
                        }}
                        disableRipple
                    >
                        {item.icon}
                        {item.title}
                    </CustomToggleButton>
                ))}
            </ToggleButtonGroup>
        </Box>
    );
};
