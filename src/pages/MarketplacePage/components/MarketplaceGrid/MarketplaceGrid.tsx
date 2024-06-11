import { Box, Grid, Divider, Typography } from "@mui/material";
import { getRandomImage, getRandomModel } from "./promptTest";
import { PromptCard } from "@/shared/ui/PromptCard";
import { useGetAllPromptsQuery } from "@/entities/prompt";
import { useGetCartQuery } from "@/entities/cart";
import { useGetFavoritesQuery } from "@/entities/favorites";

export const MarketplaceGrid = () => {
    const { data: prompts = [] } = useGetAllPromptsQuery();

    const { data: cart } = useGetCartQuery();
    const cartItems = cart?.cartItems ?? [];

    const { data: favorites } = useGetFavoritesQuery({
        sort: "new",
    });

    const favoritesItems = favorites?.favoritesItems ?? [];

    const updatedPrompts = prompts.map((prompt) => ({
        ...prompt,
        isInCart: cartItems.some(
            (cartItem) => cartItem.prompt.id === prompt.id
        ),
        isFavorite: favoritesItems.some(
            (favoritesItem) => favoritesItem.prompt.id === prompt.id
        ),
    }));

    return (
        <Box sx={{ width: "80%" }}>
            <Typography variant="title" sx={{ mb: 2 }}>
                Популярные промпты
            </Typography>
            <Divider sx={{ mb: 4, bgcolor: "#fff" }} />
            <Grid container spacing={4}>
                {updatedPrompts.map((item) => (
                    <Grid item key={item.id}>
                        <PromptCard
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            isInCart={item.isInCart}
                            isFavorite={item.isFavorite}
                            image={getRandomImage(item.id)}
                            model={getRandomModel(item.id)}
                            views={1}
                            purchases={15}
                            rating="2"
                            description="Lorem ipsum, or lipsum as it is sometimes known, is dummy text"
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
