import { Box, BoxProps, Container, styled, useTheme } from "@mui/material";
import { Outlet } from "react-router";
import { FlexBox } from "../../UI/FlexBox";
import { NavBar } from "../../modules/NavBar/NavBar";
import { SideBar } from "../../modules/SideBar/SideBar";
import { useMeQuery } from "../../pages/AuthPage/store/authApi";
import { LoadingPage } from "../../pages/LoadingPage/Loading.page";

const MainContainer = styled("main")<BoxProps>(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.bgcolor.primary.main,
    paddingTop: "72px",
    height: "100vh",
    overflow: "auto",
    ...theme.scrollbar,
}));

// const ScrollBox = styled(Box)(({ theme }) => ({
//     overflow: "auto",
//     height: "100vh",
//     ...theme.scrollbar,
// }));

export const AppLayout = () => {
    const { isLoading } = useMeQuery();

    //TODO[Артем]: Стилизовать
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <>
            <NavBar />
            <FlexBox>
                <SideBar />
                <MainContainer>
                    <Container
                        maxWidth="xl"
                        sx={{
                            mt: "15px",
                            mb: "15px",
                        }}
                    >
                        <Outlet />
                    </Container>
                </MainContainer>
            </FlexBox>
        </>
    );
};
