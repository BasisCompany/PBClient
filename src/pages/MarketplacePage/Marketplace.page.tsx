import { Box } from "@mui/material";

import { MarketplaceFilters } from "./components/MarketplaceFilters/MarketplaceFilters";
import { MarketplaceGrid } from "./components/MarketplaceGrid/MarketplaceGrid";

export const MarketplacePage = () => {
    return (
        <>
            <Box
                sx={{
                    height: "100%",
                    //bgcolor: "#764",
                    display: "flex",
                }}
            >
                <MarketplaceFilters />
                <MarketplaceGrid />
            </Box>
        </>
    );
};
