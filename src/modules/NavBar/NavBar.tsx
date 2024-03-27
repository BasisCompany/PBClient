import { memo, Suspense } from "react";
import { AppBar, Skeleton, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useAuth } from "../../shared/hooks/useAuth";
import { NavBarLogo } from "./NavBarLogo";
import { NavBarSearch } from "./NavBarSearch";
import { SideBarButton } from "./SideBarButton";
import { NavBarLogin } from "./NavBarLogin";
import { NavBarMenu } from "./NavBarMenu";
import { useMobileDevice } from "@/shared/hooks/useMobileDevice";

const NavBarBox = styled(AppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    backgroundImage: "none",
    backgroundColor: theme.palette.bgcolor.primary.main,
    position: "sticky",
}));

export const NavBar = memo(() => {
    const { isUserAuthenticated } = useAuth();
    const isMobile = useMobileDevice();

    return (
        <NavBarBox>
            <Toolbar>
                {isMobile && <SideBarButton />}
                <NavBarLogo />
                <NavBarSearch />
                <Suspense fallback={<Skeleton width="10%" height="50px" />}>
                    {isUserAuthenticated ? <NavBarMenu /> : <NavBarLogin />}
                </Suspense>
            </Toolbar>
        </NavBarBox>
    );
});
