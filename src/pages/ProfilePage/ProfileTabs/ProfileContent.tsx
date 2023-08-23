import { Box } from "@mui/material";
import { HeaderTabs } from "./HeaderTabs";
import { Outlet } from "react-router";

export const ProfileContent = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", lg: "calc(80% - 15px)" },
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mt: { xs: "15px", lg: "0px" },
            }}
        >
            <HeaderTabs />
            <Box
                sx={{
                    borderRadius: "15px",
                    pl: { lg: "15px" },
                    pt: "15px",
                    mt: "15px",
                    color: "white",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};
