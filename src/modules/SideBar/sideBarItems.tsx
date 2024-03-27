import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import StorefrontRoundedIcon from "@mui/icons-material/StorefrontRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

export const sideBarAuthItems = [
    {
        title: "Главная",
        icon: <HomeRoundedIcon sx={{ fontSize: 28 }} />,
        to: "/",
    },
    {
        title: "Магазин",
        icon: <StorefrontRoundedIcon sx={{ fontSize: 26 }} />,
        to: "/marketplace",
    },
    {
        title: "Профиль",
        icon: <PersonRoundedIcon sx={{ fontSize: 26 }} />,
        to: "/user/",
    },
    {
        title: "Помощь",
        icon: <QuizRoundedIcon sx={{ fontSize: 26 }} />,
        to: "/support",
    },
    {
        title: "login",
        icon: <DeveloperModeIcon sx={{ fontSize: 26 }} />,
        to: "/login",
    },
    {
        title: "expired",
        icon: <DeveloperModeIcon sx={{ fontSize: 26 }} />,
        to: "/expired",
    },
    {
        title: "verified",
        icon: <DeveloperModeIcon sx={{ fontSize: 26 }} />,
        to: "/verified",
    },
    {
        title: "ForgotPwd",
        icon: <DeveloperModeIcon sx={{ fontSize: 26 }} />,
        to: "/forgot-password",
    },
    {
        title: "ResetPwd",
        icon: <DeveloperModeIcon sx={{ fontSize: 26 }} />,
        to: "/reset-password/testtoken",
    },
];

export const sideBarPublicItems = sideBarAuthItems.filter(
    (item) => item.title !== "Профиль"
);
