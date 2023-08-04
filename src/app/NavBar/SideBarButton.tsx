import { IconButton } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { toggleNavbar } from "./store/navbarSlice";
import MenuIcon from "@mui/icons-material/Menu";

export const SideBarButton = () => {
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        dispatch(toggleNavbar());
    };
    return (
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleButtonClick}
        >
            <MenuIcon />
        </IconButton>
    );
};
