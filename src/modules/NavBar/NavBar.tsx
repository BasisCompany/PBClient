import { memo, lazy, Suspense } from "react";
import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../shared/hooks/useAuth";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarSearch } from "./NavBarSearch";
import { SideBarButton } from "./SideBarButton";
import { NavBarLogin } from "./NavBarLogin";

const NavBarMenu = lazy(() => import("./NavBarMenu/NavBarMenu"));

const CustomAppBar = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    backgroundImage: "none",
    backgroundColor: theme.palette.bgcolor.primary.main,
}));

export const NavBar = memo(() => {
    const { isUserAuthenticated } = useAuth();

    return (
        <CustomAppBar>
            <Toolbar>
                <SideBarButton />
                <NavBarLogo />
                <NavBarSearch />
                <Suspense fallback={<h2>Loading...</h2>}>
                    {isUserAuthenticated ? <NavBarMenu /> : <NavBarLogin />}
                </Suspense>
            </Toolbar>
        </CustomAppBar>
    );
});
