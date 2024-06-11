import { useState } from "react";
import { Box, Grid } from "@mui/material";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { ProfileSelect } from "../../components/ProfileSelect";
import { ProfilePromptsModels } from "./ProfilePromptsModels";
import { ProfilePromptsToggleMode } from "./ProfilePromptsToggleMode";
import { ProfilePromptsLine } from "./ProfilePromptsLine";
import { PromptCard } from "@/shared/ui/PromptCard";
import { useGetCartQuery } from "@/entities/cart";
import { useGetFavoritesQuery } from "@/entities/favorites";
import { useGetAllPromptsQuery } from "@/entities/prompt";
import {
    getRandomImage,
    getRandomModel,
} from "@/pages/MarketplacePage/components/MarketplaceGrid/promptTest";

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

export const ProfilePrompts = () => {
    const [model, setModel] = useState(() => [
        "ChatGPT",
        "Midjourney",
        "DALL-E",
        "Stable Diff.",
    ]);

    const handleModel = (
        _: React.MouseEvent<HTMLElement>,
        newModel: string[]
    ) => {
        setModel(newModel);
    };

    const boxModel = (model: string) => {
        setModel((prev) => {
            return prev.includes(model)
                ? prev.filter((e) => e !== model)
                : [...prev, model];
        });
    };

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
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ProfileSelect selectItems={promptsSelectItems} />
                <ProfilePromptsToggleMode />
            </Box>
            <Box>
                <ProfilePromptsLine model={model} boxModel={boxModel} />
                <ProfilePromptsModels model={model} handleModel={handleModel} />
            </Box>
            <Box sx={{ mt: 5 }}>
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
        </>
    );
};
