import * as React from "react";
import { Theme, styled } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const ProductHeroLayoutRoot = styled("section")(({ theme }) => ({
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        height: "80vh",
        minHeight: 500,
        maxHeight: 1300,
    },
}));
const backgroundImage =
    "https://c.wallhere.com/photos/e5/f6/1920x1080_px_abstract_artwork_background_black_faces_Purple-1534573.jpg!d";

const Background = styled("div")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
    borderRadius: "15px 15px 0px 0px",
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
});

interface ProductHeroLayoutProps {
    sxBackground: SxProps<Theme>;
}

export default function ProductHeroLayout(
    props: React.HTMLAttributes<HTMLDivElement> & ProductHeroLayoutProps
) {
    const { sxBackground, children } = props;

    return (
        <ProductHeroLayoutRoot>
            <Container
                sx={{
                    mt: 3,
                    mb: 14,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {children}
                <Box
                    sx={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0,
                        backgroundColor: "common.black",
                        opacity: 0.5,
                        zIndex: -1,
                    }}
                />
                <Background sx={sxBackground} />
            </Container>
        </ProductHeroLayoutRoot>
    );
}
