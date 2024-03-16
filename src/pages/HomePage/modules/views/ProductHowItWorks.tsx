import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import StorefrontIcon from "@mui/icons-material/Storefront";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import { ReactNode } from "react";
import Button from "../Button";
import Typography from "../Typography";
import ProductCurvyLines from "@/pages/HomePage/modules/views/productCurvyLines.png";

const item: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
};
const size = "70px";
const iconSize = {
    width: size,
    height: size,
};

const IconBox = ({ children }: { children: ReactNode }) => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                mt: 8,
                mb: 4,
            }}
        >
            <Box>{children}</Box>
        </Box>
    );
};

const number = {
    fontSize: 24,
    fontFamily: "default",
    color: "#9933FF",
    fontWeight: "medium",
};

function ProductHowItWorks() {
    return (
        <Box
            component="section"
            sx={{
                display: "flex",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                borderRadius: "15px",
                overflow: "hidden",
            }}
        >
            <Container
                sx={{
                    mt: 10,
                    mb: 15,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Box
                    component="img"
                    src={ProductCurvyLines}
                    alt="curvy lines"
                    sx={{
                        pointerEvents: "none",
                        position: "absolute",
                        top: -180,
                        opacity: 0.7,
                    }}
                />
                <Typography
                    variant="h4"
                    marked="center"
                    component="h2"
                    sx={{ mb: 14 }}
                >
                    Как это работает?
                </Typography>
                <div>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>1.</Box>
                                <IconBox>
                                    <StorefrontIcon sx={{ ...iconSize }} />
                                </IconBox>
                                <Typography variant="h5" align="center">
                                    Выбираете на маркетплейсы нужный Вам промпт
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>2.</Box>
                                <IconBox>
                                    <ShoppingCartOutlinedIcon
                                        sx={{ ...iconSize }}
                                    />
                                </IconBox>
                                <Typography variant="h5" align="center">
                                    В несколько кликов оформляете заказ
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={item}>
                                <Box sx={number}>3.</Box>
                                <IconBox>
                                    <SentimentSatisfiedOutlinedIcon
                                        sx={{ ...iconSize }}
                                    />
                                </IconBox>
                                <Typography variant="h5" align="center">
                                    Довольствуетесь результатом!
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </div>
                <Button
                    color="secondary"
                    size="large"
                    variant="contained"
                    component="a"
                    sx={{ mt: 8, borderRadius: "15px" }}
                >
                    Начать
                </Button>
            </Container>
        </Box>
    );
}

export default ProductHowItWorks;
