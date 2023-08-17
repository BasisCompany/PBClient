import { Box } from "@mui/material";

import { SupportHeader } from "./SupportHeader/SupportHeader";
import { SupportContentHeader } from "./SupportContent/SupportContentHeader/SupportContentHeader";
import { SupportContentMain } from "./SupportContent/SupportContentMain/SupportContentMain";

export const SupportPage = () => {
    return (
        <>
            <Box
                sx={{
                    //bgcolor: "#764",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <SupportHeader />
                <SupportContentHeader />
                <SupportContentMain />
            </Box>
        </>
    );
};
