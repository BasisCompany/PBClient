import { FC } from "react";

import { Link as RouterLink } from "react-router-dom";
import MuiListItemButton from "@mui/material/ListItemButton";
import { ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(MuiListItemButton)(() => ({
    transition: "none !important",
}));

export interface CustomListItemProps {
    path: string;
    title: string;
    selected: boolean;
}

export const CustomListItem: FC<CustomListItemProps> = ({
    path,
    title,
    selected,
}) => {
    return (
        <ListItem
            disablePadding
            component={RouterLink}
            to={path}
            sx={{
                //bgcolor: "#327",
                height: "40px",
                textDecoration: "none",
                color: "text.primary",
            }}
        >
            <StyledListItemButton
                selected={selected}
                sx={{
                    //bgcolor: "#397",
                    height: "100%",
                    borderRadius: "5px",
                    ":hover": {
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.hover,
                    },
                    "&.Mui-selected": {
                        bgcolor: (theme) =>
                            theme.palette.bgcolor.secondary.active,
                        ":hover": {
                            bgcolor: (theme) =>
                                theme.palette.bgcolor.secondary.hover,
                        },
                    },
                }}
            >
                <ListItemText primary={title} />
            </StyledListItemButton>
        </ListItem>
    );
};
