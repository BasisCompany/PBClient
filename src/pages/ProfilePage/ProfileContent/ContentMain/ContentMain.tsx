import { Box } from "@mui/material";
import { Outlet } from "react-router";

export const ContentMain = () => {
    return (
        <Box
            sx={{
                height: "500px",
                //bgcolor: "#727 ",
                //pl: "15px",
                pl: { lg: "15px" },
                pt: "15px",
                mt: "15px",
                color: "white",
            }}
        >
            <Outlet />
        </Box>
    );
};
