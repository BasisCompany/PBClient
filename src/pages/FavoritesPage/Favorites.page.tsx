import { Box, Grid } from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useSearchParams } from "react-router-dom";
import { ProfileSelect } from "../ProfilePage/components/ProfileSelect";
import {
    getRandomImage,
    getRandomModel,
} from "../MarketplacePage/components/MarketplaceGrid/promptTest";
import { PromptCard } from "@/shared/ui/PromptCard";
import { useGetFavoritesQuery } from "@/entities/favorites";
import { getSortParamSafe } from "@/shared/utils/getParamSafely";
import { useGetCartQuery } from "@/entities/cart";

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

    const { data: cart } = useGetCartQuery();
    const cartItems = cart?.cartItems ?? [];

    const updatedFavorites = favoritesItems.map((favoritesItem) => ({
        ...favoritesItem,
        isInCart: cartItems.some(
            (cartItem) => cartItem.prompt.id === favoritesItem.prompt.id
        ),
    }));

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ProfileSelect selectItems={promptsSelectItems} />
            </Box>
            <Box sx={{ mt: 5 }}>
                <Grid container spacing={4}>
                    {updatedFavorites.map(({ prompt, isInCart }) => (
                        <Grid item key={prompt.id}>
                            <PromptCard
                                id={prompt.id}
                                title={prompt.title}
                                price={prompt.price}
                                isInCart={isInCart}
                                isFavorite={true}
                                image={getRandomImage(prompt.id)}
                                model={getRandomModel(prompt.id)}
                                views={1}
                                purchases={15}
                                rating="2"
                                description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};
