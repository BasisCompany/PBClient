import * as React from "react";
import Button from "../Button";
import Typography from "../Typography";
import ProductHeroLayout from "./ProductHeroLayout";

export default function ProductHero() {
    return (
        <ProductHeroLayout>
            <Typography
                color="inherit"
                align="center"
                variant="h2"
                marked="center"
                zIndex={1}
            >
                Преобразуйте идеи в реальность!
            </Typography>
            <Typography
                color="inherit"
                align="center"
                variant="h5"
                sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
                zIndex={1}
            >
                От идеи к триумфу: Ваш путь начинается на нашем маркетплейсе!
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                component="a"
                sx={{ minWidth: 200 }}
                zIndex={1}
            >
                Register
            </Button>
            <Typography
                variant="body2"
                color="inherit"
                sx={{ mt: 2 }}
                zIndex={1}
            >
                Открой для себя новые горизонты
            </Typography>
        </ProductHeroLayout>
    );
}
