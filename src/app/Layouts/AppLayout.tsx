import { Suspense } from "react";
import {
    CircularProgress,
    Container,
    ContainerProps,
    styled,
} from "@mui/material";
import { Outlet } from "react-router";
import { SideBar } from "@/modules/SideBar/SideBar";
import { LoadingPage } from "@/pages/LoadingPage/Loading.page";
import { FlexBox } from "@/shared/ui/FlexBox";
import { NavBar } from "@/modules/NavBar";
import { useUserQuery } from "@/entities/user";

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

const LoadingSkeleton = () => (
    <FlexBox
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
    >
        <CircularProgress color="secondary" size={100} />
    </FlexBox>
);

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
                    <Suspense fallback={<LoadingSkeleton />}>
                        <Outlet />
                    </Suspense>
                </MainContainer>
            </BackgroundBox>
        </>
    );
};
