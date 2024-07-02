import { FC } from "react";
import { Box, Grid, Divider, Typography } from "@mui/material";
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
                {prompts.map((prompt) => (
                    <Grid item key={prompt.id}>
                        <PromptCard prompt={prompt} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
