import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../Typography";
import { cardListContent } from "@/pages/MarketplacePage/components/MarketplaceGrid/cardListContent";

const ImageBackdrop = styled("div")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: "#000",
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("md")]: {
        width: "100% !important",
        height: 100,
    },
    "&:hover": {
        zIndex: 1,
    },
    "&:hover .imageBackdrop": {
        opacity: 0.15,
    },
    "&:hover .imageMarked": {
        opacity: 0,
    },
    "&:hover .imageTitle": {
        border: "4px solid currentColor",
    },
    "& .imageTitle": {
        position: "relative",
        padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    "& .imageMarked": {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity"),
    },
}));

const images = [
    {
        url: cardListContent[0].image,
        title: cardListContent[0].title,
        width: "40%",
    },
    {
        url: cardListContent[1].image,
        title: cardListContent[1].title,
        width: "20%",
    },
    {
        url: cardListContent[2].image,
        title: cardListContent[2].title,
        width: "40%",
    },
    {
        url: cardListContent[3].image,
        title: cardListContent[3].title,
        width: "38%",
    },
    {
        url: cardListContent[4].image,
        title: cardListContent[4].title,
        width: "38%",
    },
    {
        url: cardListContent[10].image,
        title: cardListContent[10].title,
        width: "24%",
    },
    {
        url: cardListContent[6].image,
        title: cardListContent[6].title,
        width: "40%",
    },
    {
        url: cardListContent[9].image,
        title: cardListContent[9].title,
        width: "20%",
    },
    {
        url: cardListContent[8].image,
        title: cardListContent[8].title,
        width: "40%",
    },
];

export default function ProductCategories() {
    return (
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
            <Typography
                variant="h4"
                marked="center"
                align="center"
                component="h2"
            >
                На любой вкус и на все желания
            </Typography>
            <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
                {images.map((image) => (
                    <ImageIconButton
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundSize: "cover",
                                backgroundPosition: "center 40%",
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <ImageBackdrop className="imageBackdrop" />
                        <Box
                            sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "common.white",
                            }}
                        >
                            <Typography
                                component="h3"
                                variant="h6"
                                color="inherit"
                                className="imageTitle"
                            >
                                {image.title}
                                <div className="imageMarked" />
                            </Typography>
                        </Box>
                    </ImageIconButton>
                ))}
            </Box>
        </Container>
    );
}
