import { Box, Typography } from "@mui/material";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

export interface ErrorPageStaticProps {
    children: React.ReactNode;
}

export const ErrorPageStatic: React.FC<ErrorPageStaticProps> = ({
    children,
}) => {
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

                {children}
                <RefreshRoundedIcon
                    onClick={reloadPage}
                    sx={{
                        bgcolor: "primary.main",
                        border: "1px solid #fff",
                        borderRadius: "100%",
                        mt: { xs: "4vw", md: "4vh" },
                        fontSize: { xs: "10vw", md: "5vh" },
                        cursor: "pointer",
                    }}
                />
            </Box>
        </Box>
    );
};
