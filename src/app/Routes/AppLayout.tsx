import { Box, BoxProps, styled } from "@mui/material";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar/AppBar";

const FlexBox = styled(Box)<BoxProps>(() => ({
    display: "flex",
}));

const MainContainer = styled("main", { name: "main" })<BoxProps>(() => ({
    flexGrow: 1,
    bgcolor: "background.default",
    pt: 10,
    height: "100%",
    overflow: "auto",
}));

export const AppLayout = () => {
    return (
        <>
            <AppBar />
            <FlexBox>
                {/* <NavBar /> */}
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </>
    );
};
