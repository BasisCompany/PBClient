import { Box, Typography } from "@mui/material";
import AuthPageImage from "./../../assets/AuthPageImage.png";

export const AuthAbout = () => {
    return (
        <Box
            sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                flexDirection: "column",
                height: "830px",
                overflow: "hidden",
                mr: "50px",
            }}
        >
            <Box
                sx={{
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h2"
                    color="text.primary"
                    sx={{
                        margin: 0,
                        fontSize: { md: 30, lg: 44, xl: 52 },
                        visibility: "visible",
                        maxHeight: "450px",
                        WebkitLineClamp: "7",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Добро пожаловать в первый в России магазин промтов
                </Typography>
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    mt: "20px",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h1"
                    color="text.secondary"
                    sx={{
                        margin: 0,
                        fontSize: { md: 13, lg: 19, xl: 22 },
                        visibility: "visible",
                        maxHeight: "150px",
                        WebkitLineClamp: "7",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Перейдите на новый уровень в своем творчестве с нашим
                    разнообразным выбором промтов
                </Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                    component="img"
                    sx={{
                        mt: "30px",
                        height: "auto",
                        width: "85%",

                        // maxHeight: {
                        //     xs: "90px",
                        //     sm: "180px",
                        //     md: "360px",
                        //     lg: "540px",
                        // },
                        // maxWidth: {
                        //     xs: "160px",
                        //     sm: "320px",
                        //     md: "640px",
                        //     lg: "960px",
                        // },
                    }}
                    alt="The house from the offer."
                    src={AuthPageImage}
                />
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    mt: "30px",
                    width: "100%",
                }}
            >
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        margin: 0,
                        fontSize: { md: 9, lg: 14, xl: 16 },
                        visibility: "visible",
                        maxHeight: "150px",
                        WebkitLineClamp: "7",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    Получайте доступ к эксклюзивным идеям и делитесь своим
                    талантом с другими
                </Typography>
            </Box>
        </Box>
    );
};
