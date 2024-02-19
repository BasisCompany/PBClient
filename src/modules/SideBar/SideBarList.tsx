import {
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../redux/hooks";
import { useAuth } from "../../shared/hooks/useAuth";
import { useMobileDevice } from "../../shared/hooks/useMobileDevice";
import {
    LinkListItem,
    LinkListItemProps,
} from "../../shared/ui/Links/LinkListItem";
import { sideBarItems } from "./sideBarItems";
import { selectSideBarStatus } from "./store/sidebarSlice";

const SideBarItem = styled((props: LinkListItemProps) => (
    <LinkListItem disablePadding {...props} />
))(({ theme }) => ({
    textDecoration: "none",
    color: theme.palette.text.primary,
    display: "block",
    "& :hover": {
        borderRadius: "15px",
    },
}));

const SideBarItemButton = styled(ListItemButton)({
    justifyContent: "initial",
    transition: "none !important",
    minHeight: 48,
    marginRight: "4px",
    marginLeft: "4px",
    paddingLeft: "20px",
    paddingRight: "20px",
});

const commonIconStyles = {
    minWidth: 0,
    justifyContent: "center",
};

const SideBarItemIcon = styled(ListItemIcon)({
    ...commonIconStyles,
    marginRight: "24px",
});

const SideBarItemMinIcon = styled(ListItemIcon)(commonIconStyles);

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

export const SideBarList = () => {
    const isMobile = useMobileDevice();
    const isOpen = useAppSelector(selectSideBarStatus);
    const { user } = useAuth();

    const ButtonComponent =
        isMobile || isOpen ? SideBarItemButton : SideBarItemMinButton;
    const IconComponent =
        isMobile || isOpen ? SideBarItemIcon : SideBarItemMinIcon;

    const renderSideBarItem = (item: (typeof sideBarItems)[number]) => {
        if (item.title === "Профиль" && !user) {
            return null;
        }
        const to = item.title === "Профиль" ? `${item.to}${user!.id}` : item.to;
        return (
            <SideBarItem key={item.title} to={to}>
                <ButtonComponent>
                    <IconComponent>{item.icon}</IconComponent>
                    <ListItemText
                        primary={isOpen ? item.title : undefined}
                        secondary={isOpen ? undefined : item.title}
                    />
                </ButtonComponent>
            </SideBarItem>
        );
    };

    return <List>{sideBarItems.map(renderSideBarItem)}</List>;
};
