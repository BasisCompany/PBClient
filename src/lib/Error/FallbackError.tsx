import { Box, Button, Typography } from "@mui/material";
import { PromptBuyIcon } from "../../assets/PromptBuyIcon";

export const FallbackError = () => {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <Box
            sx={{
                bgcolor: "background.default",
                color: "text.primary",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    width: "100vw",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h2"
                    color="text.primary"
                    sx={{
                        fontSize: { xs: "8vw", md: "8vh" },
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Упс!
                </Typography>
                <Typography
                    variant="h1"
                    color="text.secondary"
                    sx={{
                        fontSize: { xs: "6vw", md: "6vh" },
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Что-то пошло не так!
                </Typography>
                <PromptBuyIcon
                    sx={{
                        fontSize: { xs: "50vw", md: "50vh" },
                        height: { xs: "30vw", md: "30vh" },
                    }}
                />
                <Button
                    onClick={reloadPage}
                    sx={{
                        backgroundColor: "primary.main",
                        width: { xs: "40vw", md: "40vh" },
                        height: { xs: "10vw", md: "10vh" },
                        textTransform: "none",
                        borderRadius: "15px",
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                        "&:hover": {
                            backgroundColor: "action.hover",
                        },
                    }}
                >
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            fontSize: { xs: "3vw", md: "3vh" },
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        Вернуться на главную
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};
