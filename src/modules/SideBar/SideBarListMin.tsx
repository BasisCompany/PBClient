import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { sideBarItems } from "./sideBarItems";
import { SideBarItem } from "./SideBarItem";

const SideBarItemMinButton = styled(ListItemButton)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    borderRadius: "15px",
    paddingTop: "10px",
    transition: "none !important",
    minHeight: 48,
    ":hover": {
        borderRadius: "15px",
        bgcolor: theme.palette.bgcolor.primary.hover,
    },
}));

const SideBarItemMinIcon = styled(ListItemIcon)({
    minWidth: 0,
    justifyContent: "center",
});

export const SideBarListMin = () => {
    const { user } = useAuth();

    return (
        <List>
            {sideBarItems.map((item) => (
                <SideBarItem
                    key={item.title}
                    to={
                        item.title === "Профиль"
                            ? `${item.to}${user!.id}`
                            : item.to
                    }
                >
                    <SideBarItemMinButton>
                        <SideBarItemMinIcon>{item.icon}</SideBarItemMinIcon>
                        <ListItemText secondary={item.title} />
                    </SideBarItemMinButton>
                </SideBarItem>
            ))}
        </List>
    );
};
