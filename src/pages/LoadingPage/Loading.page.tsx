import { Box, CircularProgress } from "@mui/material";

export const LoadingPage = () => {
    return (
        <Box
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            <CircularProgress color="secondary" size={100} />
        </Box>
    );
};
