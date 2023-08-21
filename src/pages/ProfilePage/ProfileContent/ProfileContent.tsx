import { Box } from "@mui/material";
import { HeaderTabs } from "./HeaderTabs";
import { ContentMain } from "./ContentMain/ContentMain";

export const ProfileContent = () => {
    return (
        <Box
            sx={{
                //bgcolor: "#966",
                position: "relative",
                width: { xs: "100%", lg: "calc(80% - 15px)" },
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mt: { xs: "15px", lg: "0px" },
            }}
        >
            <HeaderTabs />
            <ContentMain />
        </Box>
    );
};
