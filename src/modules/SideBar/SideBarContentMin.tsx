import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiListItemButton from "@mui/material/ListItemButton";
import { Link as RouterLink } from "react-router-dom";
import { sideBarItems } from "./sideBarItems";

const StyledListItemButton = styled(MuiListItemButton)`
    transition: none !important;
`;

export const SideBarContentMin = () => {
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
                            px: 2.5,
                            paddingTop: "10px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                justifyContent: "center",
                            }}
                        >
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText secondary={item.title} />
                    </StyledListItemButton>
                </ListItem>
            ))}
        </List>
    );
};
