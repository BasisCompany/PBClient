import { Box } from "@mui/material";
import { Outlet } from "react-router";

export const ContentMain = () => {
    return (
        <Box
            sx={{
                height: "500px",
                bgcolor: "#272727 ",
                borderRadius: "15px",
                mt: "15px",
            }}
        >
            <Outlet />
        </Box>
    );
};
