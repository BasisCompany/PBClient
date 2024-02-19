import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { toggleSidebar } from "../SideBar/store/sidebarSlice";
import { useAppDispatch } from "../../app/appStore";

export const SideBarButton = () => {
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(toggleSidebar());
    };
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{
                mr: 2,
                ":hover": {
                    bgcolor: (theme) => theme.palette.bgcolor.primary.hover,
                },
            }}
            onClick={handleButtonClick}
        >
            <MenuIcon />
        </IconButton>
    );
};
