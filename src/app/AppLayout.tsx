import { BoxProps, Container, ContainerProps, styled } from "@mui/material";
import { Outlet } from "react-router";
import { FlexBox } from "../UI/FlexBox";
import { NavBar } from "./NavBar/NavBar";
import { SideBar } from "./SideBar/SideBar";

const MainContainer = styled("main")<BoxProps>(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    paddingTop: "72px",
    height: "100vh",
    overflow: "auto",
}));

export const AppLayout = () => {
    return (
        <>
            <NavBar />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Container maxWidth="xl" sx={{ mt: "15px", mb: "15px" }}>
                        <Outlet />
                    </Container>
                </MainContainer>
            </FlexBox>
        </>
    );
};
