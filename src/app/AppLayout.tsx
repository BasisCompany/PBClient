import { Box, BoxProps, styled } from "@mui/material";
import { Outlet } from "react-router";
import { SideBar } from "./SideBar/SideBar";
import { NavBar } from "./NavBar/NavBar";
import { FlexBox } from "../UI/FlexBox";

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
            <NavBar />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Outlet />
                </MainContainer>
            </FlexBox>
        </>
    );
};
