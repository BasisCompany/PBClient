import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import FilterNoneOutlinedIcon from "@mui/icons-material/FilterNoneOutlined";
import Typography from "../Typography";
import ProductCurvyLines from "@/pages/HomePage/modules/views/productCurvyLines.png";

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};

const size = "80px";
const iconSize = {
    width: size,
    height: size,
};

const IconBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
            }}
        >
            <Box>{children}</Box>
        </Box>
    );
};

function ProductValues() {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                overflow: "hidden",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                borderRadius: "0px 0px 15px 15px",
            }}
        >
            <Container
                sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
            >
                <Box
                    component="img"
                    src={ProductCurvyLines}
                    alt="curvy lines"
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        top: -180,
                    }}
                />
                <Grid container spacing={5}>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconBox>
                                <FilterNoneOutlinedIcon sx={{ ...iconSize }} />
                            </IconBox>
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Широкий выбор
                            </Typography>
                            <Typography variant="h5">
                                Наш маркетплейс предлагает разнообразные промпты
                                на любой вкус и потребность, позволяя
                                пользователям выбирать именно то, что им нужно.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconBox>
                                <StarBorderOutlinedIcon sx={{ ...iconSize }} />
                            </IconBox>
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Качество контента
                            </Typography>
                            <Typography variant="h5">
                                Мы сотрудничаем с опытными авторами и
                                экспертами, чтобы предоставить
                                высококачественные промпты, гарантируя
                                удовлетворение потребностей наших клиентов.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={item}>
                            <IconBox>
                                <VerifiedUserOutlinedIcon
                                    sx={{ ...iconSize }}
                                />
                            </IconBox>
                            <Typography variant="h6" sx={{ my: 5 }}>
                                Удобство и безопасность
                            </Typography>
                            <Typography variant="h5">
                                Наш удобный интерфейс и системы безопасности
                                делают процесс покупки и использования промптов
                                простым и безопасным для всех наших
                                пользователей.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ProductValues;
