import { Box, Grid, Divider, Typography } from "@mui/material";
import { cardListContent } from "./cardListContent";
import { PromptCard } from "@/shared/ui/PromptCard";

export const MarketplaceGrid = () => {
    return (
        <Box sx={{ width: "80%" }}>
            <Typography variant="title" sx={{ mb: 2 }}>
                Популярные промпты
            </Typography>
            <Divider sx={{ mb: 4, bgcolor: "#fff" }} />
            <Grid container spacing={4}>
                {[...cardListContent, ...cardListContent, ...cardListContent]
                    .sort(() => Math.random() - 0.5)
                    .map(({ id, ...item }) => (
                        <Grid item key={id}>
                            <PromptCard {...item} />
                        </Grid>
                    ))}
            </Grid>
        </Box>
    );
};
