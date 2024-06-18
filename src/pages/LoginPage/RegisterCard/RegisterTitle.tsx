import { Box, Typography } from "@mui/material";

export const RegisterTitle = () => {
    return (
        <Box>
            <Box
                sx={{
                    display: { xs: "none", sm: "none", md: "flex" },
                    justifyContent: "center",
                    mb: 1,
                }}
            >
                <Typography
                    component={"span"}
                    variant="h6"
                    color="text.primary"
                    sx={{
                        marginBottom: "4px",
                        fontSize: 30,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Создайте аккаунт
                </Typography>
            </Box>
        </Box>
    );
};
