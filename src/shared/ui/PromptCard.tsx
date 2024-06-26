import { FC } from "react";
import {
    Badge,
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
    styled,
} from "@mui/material";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { useAddToCartMutation } from "@/entities/cart";
import {
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} from "@/entities/favorites";

const CardBadge = styled(Badge)(() => ({
    "& .MuiBadge-badge": {
        fontSize: "0.55rem",
        padding: 0,
    },
}));

export interface PromptCardProps {
    id: number;
    image: string;
    model: {
        icon: React.ReactNode;
        iconName: string;
    };
    title: string;
    description: string;
    views: number;
    purchases: number;
    rating: string;
    price: number;
    isInCart?: boolean;
    isFavorite?: boolean;
}

export const PromptCard: FC<PromptCardProps> = ({
    id,
    image,
    model: { icon, iconName },
    title,
    description,
    views,
    purchases,
    rating,
    price,
    isInCart,
    isFavorite,
}) => {
    const [addToCart] = useAddToCartMutation();
    const [addToFavorites] = useAddToFavoritesMutation();
    const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

    const handleAddToCart = async () => {
        try {
            await addToCart(id);
        } catch (error) {
            /* empty */
        }
    };

    const toggleFavorites = async () => {
        try {
            if (isFavorite) {
                await deleteFromFavorites(id);
            } else {
                await addToFavorites(id);
            }
        } catch (error) {
            /* empty */
        }
    };

    return (
        <Card
            sx={{
                maxWidth: "203px",
                height: "355px", //285
                borderRadius: "15px",
                bgcolor: "primary.dark",
                ":hover": {
                    cursor: "pointer",
                    boxShadow: "action.hover 0px 0px 0px 3px",
                },
            }}
        >
            <CardActionArea>
                <Box sx={{ position: "relative" }}>
                    <CardMedia
                        component="img"
                        height="135px"
                        image={image}
                        alt="Paella dish"
                    />
                    <Box
                        sx={{
                            position: "absolute",
                            padding: "3px",
                            pr: 1,
                            top: "13px",
                            borderRadius: "0px 10px 10px 0px",
                            cursor: "pointer",
                            bgcolor: "#272727",
                            display: "flex",
                        }}
                    >
                        {icon}
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: 13,
                                marginTop: "2px",
                                cursor: "pointer",
                            }}
                        >
                            {iconName}
                        </Typography>
                    </Box>
                </Box>
                <CardContent>
                    <Typography
                        variant="h6"
                        color="text.primary"
                        sx={{
                            marginBottom: "4px",
                            fontSize: 17,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        sx={{
                            margin: 0,
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "100px",
                            WebkitLineClamp: "2",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "pointer",
                        }}
                    >
                        {description}
                    </Typography>
                    <Box
                        sx={{
                            marginTop: "26px",
                            cursor: "default",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                cursor: "default",
                                width: "97px",
                                display: "flex",
                                justifyContent: "space-between",
                                paddingTop: "2px",
                            }}
                        >
                            <CardBadge
                                badgeContent={views}
                                color="secondary"
                                max={999}
                            >
                                <RemoveRedEyeRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </CardBadge>
                            <CardBadge
                                badgeContent={purchases}
                                color="secondary"
                                max={999}
                            >
                                <LocalOfferRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </CardBadge>
                            <CardBadge
                                badgeContent={rating}
                                color="secondary"
                                max={5}
                            >
                                <GradeRoundedIcon
                                    sx={{
                                        fontSize: 19,
                                    }}
                                />
                            </CardBadge>
                        </Box>
                        <Typography
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontSize: "15px",
                            }}
                        >
                            {price} ₽
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <PrimaryButton
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    sx={{
                        bgcolor: isInCart ? "darkred" : undefined,
                        fontSize: "14px",
                        lineHeight: 1.2,
                    }}
                >
                    {isInCart ? "В корзине" : "Добавить в корзину"}
                </PrimaryButton>
                <Box
                    sx={{
                        padding: "3px",
                        pr: 1,
                        top: "10px",
                        right: 0,
                        cursor: "pointer",
                    }}
                >
                    <IconButton onClick={toggleFavorites}>
                        {isFavorite ? (
                            <FavoriteIcon
                                sx={{
                                    fontSize: "30px",
                                    color: "red",
                                }}
                            />
                        ) : (
                            <FavoriteBorderIcon sx={{ fontSize: "30px" }} />
                        )}
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    );
};
