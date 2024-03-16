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
import { cardListContent } from "@/pages/MarketplacePage/components/MarketplaceGrid/cardListContent";
import { PromptCard } from "@/shared/ui/PromptCard";

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
                    {[
                        ...cardListContent,
                        ...cardListContent,
                        ...cardListContent,
                    ]
                        .sort(() => Math.random() - 0.5)
                        .map(({ id, ...item }) => (
                            <Grid item key={id}>
                                <PromptCard {...item} />
                            </Grid>
                        ))}
                </Grid>
                {/* {model.map((item, i) => (
                    <Box key={i} sx={{ height: "100px" }}>
                        {item}
                    </Box>
                ))} */}
            </Box>
        </>
    );
};
