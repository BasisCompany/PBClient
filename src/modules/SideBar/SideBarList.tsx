import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { sideBarItems } from "./sideBarItems";
import { SideBarItem } from "./SideBarItem";

const SideBarItemButton = styled(ListItemButton)({
    justifyContent: "initial",
    transition: "none !important",
    minHeight: 48,
    marginRight: "4px",
    marginLeft: "4px",
    paddingLeft: "20px",
    paddingRight: "20px",
});

const SideBarItemIcon = styled(ListItemIcon)({
    minWidth: 0,
    justifyContent: "center",
    marginRight: "24px",
});

export const SideBarList = () => {
    return (
        <List>
            {sideBarItems.map((item) => (
                <SideBarItem key={item.title} to={item.to}>
                    <SideBarItemButton>
                        <SideBarItemIcon>{item.icon}</SideBarItemIcon>
                        <ListItemText primary={item.title} />
                    </SideBarItemButton>
                </SideBarItem>
            ))}
        </List>
    );
};
