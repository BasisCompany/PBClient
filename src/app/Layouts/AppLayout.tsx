import { Suspense } from "react";
import { Container, ContainerProps, styled } from "@mui/material";
import { Outlet } from "react-router";
import { SideBar } from "@/modules/SideBar/SideBar";
import { LoadingPage } from "@/pages/LoadingPage/Loading.page";
import { FlexBox } from "@/shared/ui/FlexBox";
import { NavBar } from "@/modules/NavBar";
import { useUserQuery } from "@/entities/user";
import { LoadingCircular } from "@/shared/ui/Loading";

const BackgroundBox = styled(FlexBox)(({ theme }) => ({
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: theme.palette.bgcolor.primary.main,
}));

const MainContainer = styled((props: ContainerProps) => (
    <Container component="main" maxWidth="xl" {...props} />
))({
    //overflow: "auto", //TODO: TEst Зачем нужно??
    margin: "15px 0px 15px",
});

export const AppLayout = () => {
    const { isLoading } = useUserQuery();

    //TODO[Артем]: Стилизовать
    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <>
            <NavBar />
            <BackgroundBox>
                <SideBar />
                <MainContainer>
                    <Suspense fallback={<LoadingCircular />}>
                        <Outlet />
                    </Suspense>
                </MainContainer>
            </BackgroundBox>
        </>
    );
};
