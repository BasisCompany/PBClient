import { Box, BoxProps, styled } from "@mui/material";
import { Outlet } from "react-router";
import { AppBar } from "./AppBar/AppBar";
import NavBar from "./NavBar/NavBar";

const FlexBox = styled(Box)<BoxProps>(() => ({
    display: "flex",
}));

const MainContainer = styled("main")<BoxProps>(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: "72px",
    height: "100%",
    overflow: "auto",
}));

export const AppLayout = () => {
    return (
        <>
            <AppBar />
            <FlexBox>
                <NavBar />
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </>
    );
};
