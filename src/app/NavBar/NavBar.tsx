import { Box, AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { NavBarIconMenu } from "./NavBarIconMenu";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarSearch } from "./NavBarSearch";
import { SideBarButton } from "./SideBarButton";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    backgroundImage: "none",
}));

const Spacer = styled(Box)({
    flexGrow: 1,
});

export const NavBar = () => {
    const { isUserAuthenticated } = useAuth();
    console.log(isUserAuthenticated);

    return (
        <CustomAppBar>
            <Toolbar>
                <SideBarButton />
                <NavBarLogo />
                <NavBarSearch />
                <Spacer />
                <NavBarIconMenu />
            </Toolbar>
        </CustomAppBar>
    );
};
