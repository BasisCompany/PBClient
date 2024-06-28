import { FC } from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
import { getRandomImage, getRandomModel } from "./promptTest";
import { PromptCard } from "@/shared/ui/PromptCard";
import { Prompt } from "@/entities/prompt";

interface MarketplaceGridProps {
    prompts: Prompt[];
}

export const MarketplaceGrid: FC<MarketplaceGridProps> = ({ prompts }) => {
    return (
        <Box sx={{ width: "80%" }}>
            <Typography variant="title" sx={{ mb: 2 }}>
                Популярные промпты
            </Typography>
            <Divider sx={{ mb: 4, bgcolor: "#fff" }} />
            <Grid container spacing={4}>
                {prompts.map((item) => (
                    <Grid item key={item.id}>
                        <PromptCard
                            id={item.id}
                            url={item.url}
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
