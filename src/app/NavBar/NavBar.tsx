import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { NavBarIconMenu } from "./IconMenu/NavBarIconMenu";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarSearch } from "./NavBarSearch";
import { SideBarButton } from "./SideBarButton";
import { Spacer } from "../../UI/Spacer";
import { NavBarLogin } from "./IconMenu/NavBarLogin";

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    backgroundImage: "none",
}));

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
                {isUserAuthenticated ? <NavBarIconMenu /> : <NavBarLogin />}
            </Toolbar>
        </CustomAppBar>
    );
};
