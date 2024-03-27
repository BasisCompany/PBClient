import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import { sideBarAuthItems, sideBarPublicItems } from "./sideBarItems";
import { useAuth } from "@/shared/hooks/useAuth";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";
import { LinkListItem } from "@/shared/ui/Links";

const DesktopIcon = styled(ListItemIcon)({
    minWidth: 0,
    justifyContent: "center",
});

const MobileIcon = styled(DesktopIcon)({
    marginRight: "24px",
});

const SideBarListItemButton = styled(ListItemButton)({
    minHeight: 48,
    transition: "none !important",
    borderRadius: "15px",
});

const MobileButton = styled(SideBarListItemButton)({
    margin: "0px 4px 0px",
    padding: "0px 20px 0px",
});

const DesktopButton = styled(SideBarListItemButton)({
    flexDirection: "column",
    paddingTop: "10px",
});

export const SideBarList = () => {
    const isMobile = useMobileDevice();
    const { user } = useAuth();

    const ButtonComponent = isMobile ? MobileButton : DesktopButton;
    const IconComponent = isMobile ? MobileIcon : DesktopIcon;

    const sideBarItems = user ? sideBarAuthItems : sideBarPublicItems;

    return (
        <List>
            {sideBarItems.map((item) => {
                const to =
                    item.title === "Профиль"
                        ? `${item.to}${user!.id}`
                        : item.to;
                return (
                    <LinkListItem key={item.title} to={to} disablePadding>
                        <ButtonComponent>
                            <IconComponent>{item.icon}</IconComponent>
                            <ListItemText
                                primary={isMobile ? item.title : undefined}
                                secondary={!isMobile ? item.title : undefined}
                            />
                        </ButtonComponent>
                    </LinkListItem>
                );
            })}
        </List>
    );
};
