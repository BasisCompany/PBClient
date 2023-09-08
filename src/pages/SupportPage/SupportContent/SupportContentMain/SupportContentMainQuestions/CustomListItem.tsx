import { FC } from "react";
import MuiListItemButton from "@mui/material/ListItemButton";
import { ListItem, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(MuiListItemButton)(() => ({
    transition: "none !important",
}));

export interface CustomListItemProps {
    title: string;
    selected: boolean;
    onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const CustomListItem: FC<CustomListItemProps> = ({
    title,
    selected,
    onClick,
}) => {
    return (
        <ListItem
            disablePadding
            sx={{
                //bgcolor: "#327",
                mt: "4px",
                mb: "4px",
                height: "40px",
                textDecoration: "none",
                color: (theme) => theme.palette.text.primary,
            }}
        >
            <StyledListItemButton
                selected={selected}
                onClick={onClick}
                sx={{
                    //color: "#543",
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
                                theme.palette.bgcolor.secondary.active,
                        },
                    },
                }}
            >
                <ListItemText primary={title} />
            </StyledListItemButton>
        </ListItem>
    );
};
