import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export const contentMainSelectListContent = [
    {
        id: 0,
        value: "new",
        icon: <UpdateRoundedIcon sx={{ fontSize: "19px" }} />,
        label: "Новые",
    },
    {
        id: 1,
        value: "rating",
        icon: <GradeRoundedIcon sx={{ fontSize: "19px" }} />,
        label: "Высокий рейтинг",
    },
    {
        id: 2,
        value: "like",
        icon: <FavoriteRoundedIcon sx={{ fontSize: "19px" }} />,
        label: "Много лайков",
    },
    {
        id: 3,
        value: "shop",
        icon: <ShoppingCartRoundedIcon sx={{ fontSize: "19px" }} />,
        label: "Популярные",
    },
];
