import { FC } from "react";
import { Badge, Box, IconButton, Typography } from "@mui/material";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { Image } from "./Image";
import { LinkIconButton } from "./Links";
import {
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} from "@/entities/favorites";

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
    const [addToFavorites] = useAddToFavoritesMutation();
    const [deleteFromFavorites] = useDeleteFromFavoritesMutation();

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
        <Box
            component="article"
            sx={{
                maxWidth: "203px",
                height: "360px", //285
                borderRadius: "15px",
                //bgcolor: "primary.dark",
                ":hover": {
                    cursor: "pointer",
                    boxShadow: "action.hover 0px 0px 0px 3px",
                },
            }}
        >
            <Box>
                <Box sx={{ position: "relative", mb: 1 }}>
                    <Image
                        src={image}
                        height="200px"
                        width="203px"
                        sx={{ borderRadius: "10px 10px 10px 10px" }}
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
                    <Box
                        sx={{
                            position: "absolute",
                            top: "6px",
                            left: "160px",
                        }}
                    >
                        <IconButton onClick={toggleFavorites}>
                            {isFavorite ? (
                                <FavoriteIcon
                                    sx={{
                                        fontSize: "25px",
                                        color: "red",
                                    }}
                                />
                            ) : (
                                <FavoriteTwoToneIcon
                                    sx={{
                                        fontSize: "25px",
                                        color: "white",
                                    }}
                                />
                            )}
                        </IconButton>
                    </Box>
                    {isInCart && (
                        <Box
                            sx={{
                                position: "absolute",
                                top: "40px",
                                left: "160px",
                            }}
                        >
                            <LinkIconButton to="/cart">
                                <ShoppingCartTwoToneIcon
                                    sx={{
                                        fontSize: "25px",
                                        color: "white",
                                    }}
                                />
                            </LinkIconButton>
                        </Box>
                    )}
                </Box>
                <Box sx={{ p: 1 }}>
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
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "97px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    paddingTop: "2px",
                                }}
                            >
                                <Badge
                                    badgeContent={views}
                                    color="secondary"
                                    max={999}
                                >
                                    <RemoveRedEyeRoundedIcon
                                        sx={{
                                            fontSize: 19,
                                        }}
                                    />
                                </Badge>
                                <Badge
                                    badgeContent={purchases}
                                    color="secondary"
                                    max={999}
                                >
                                    <ShoppingCartRoundedIcon
                                        sx={{
                                            fontSize: 19,
                                        }}
                                    />
                                </Badge>
                                <Badge
                                    badgeContent={rating}
                                    color="secondary"
                                    max={5}
                                >
                                    <GradeRoundedIcon
                                        sx={{
                                            fontSize: 19,
                                        }}
                                    />
                                </Badge>
                            </Box>
                        </Box>
                        <Typography
                            variant="text"
                            fontSize="16px"
                            fontWeight="500"
                        >
                            {price} ₽
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
