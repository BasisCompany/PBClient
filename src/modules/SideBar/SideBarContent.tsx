import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";

import { Link as RouterLink } from "react-router-dom";
import MuiListItemButton from "@mui/material/ListItemButton";
import { useAppSelector } from "../../redux/hooks";
import { selectNavbarStatus } from "../NavBar/store/navbarSlice";
import { sideBarItems } from "./sideBarItems";

const StyledListItemButton = styled(MuiListItemButton)`
    transition: none !important;
`;

export const SideBarContent = () => {
    const isOpen = useAppSelector(selectNavbarStatus);
    return (
        <List>
            {sideBarItems.map((item) => (
                <ListItem
                    key={item.title}
                    component={RouterLink}
                    to={item.to}
                    disablePadding
                    sx={{
                        textDecoration: "none",
                        color: "text.primary",
                        display: "block",
                        "& :hover": {
                            borderRadius: "15px",
                        },
                    }}
                >
                    <StyledListItemButton
                        sx={{
                            minHeight: 48,
                            mr: isOpen ? 0.5 : "none",
                            ml: isOpen ? 0.5 : "none",
                            justifyContent: isOpen ? "initial" : "center",
                            px: 2.5,
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: isOpen ? 3 : "auto",
                                justifyContent: "center",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText
                            primary={item.title}
                            sx={{ opacity: isOpen ? 1 : 0 }}
                        />
                    </StyledListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
