import { Box, Divider, Grid, Typography } from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSearchParams } from "react-router-dom";
import { ProfileSelect } from "../ProfilePage/components/ProfileSelect";
import { PromptCard } from "@/shared/ui/PromptCard";
import { useGetFavoritesQuery } from "@/entities/favorites";
import { getSortParamSafe } from "@/shared/utils/getParamSafely";
import { FlexBox } from "@/shared/ui/FlexBox";

const promptsSelectItems = {
    params: ["new", "rating", "like", "shop"],
    icons: [
        <UpdateRoundedIcon key="new" sx={{ fontSize: "19px" }} />,
        <GradeRoundedIcon key="rating" sx={{ fontSize: "19px" }} />,
        <FavoriteRoundedIcon key="like" sx={{ fontSize: "19px" }} />,
        <ShoppingCartRoundedIcon key="shop" sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Новые", "Высокий рейтинг", "Много лайков", "Популярные"],
};

export const FavoritesPage = () => {
    const [searchParams] = useSearchParams();
    const currentSort = getSortParamSafe(
        searchParams,
        promptsSelectItems.params
    );

    const { data: favorites } = useGetFavoritesQuery({
        sort: currentSort,
    });

    const favoritesItems = favorites?.favoritesItems ?? [];

    return (
        <Box>
            <Typography variant="title" sx={{ mb: 2 }}>
                Избранное
            </Typography>
            <Divider sx={{ mb: 3, bgcolor: "#fff" }} />
            <FlexBox justifyContent="space-between" alignItems="center">
                <ProfileSelect selectItems={promptsSelectItems} />
            </FlexBox>
            <Box mt={5}>
                <Grid container spacing={4}>
                    {favoritesItems.map(({ prompt }) => (
                        <Grid item key={prompt.id}>
                            <PromptCard prompt={prompt} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
