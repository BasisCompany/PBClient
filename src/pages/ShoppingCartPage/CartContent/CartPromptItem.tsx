import { FC, memo } from "react";
import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteTwoToneIcon from "@mui/icons-material/FavoriteTwoTone";
import { FlexBox } from "@/shared/ui/FlexBox";
import {
    useAddToOrderMutation,
    useDeleteFromCartMutation,
} from "@/entities/cart";
import {
    useAddToFavoritesMutation,
    useDeleteFromFavoritesMutation,
} from "@/entities/favorites";

import { CartItem } from "@/entities/cart/model/types";
import {
    getRandomImage,
    getRandomModel,
} from "@/pages/MarketplacePage/components/MarketplaceGrid/promptTest";
import { Image } from "@/shared/ui/Image";

interface CartPromptItemProps {
    cartItem: CartItem;
}

export const CartPromptItem: FC<CartPromptItemProps> = memo(({ cartItem }) => {
    const model = getRandomModel(cartItem.prompt.id);
    const [addToFavorites] = useAddToFavoritesMutation();
    const [deleteFromFavorites] = useDeleteFromFavoritesMutation();
    const [addToOrder] = useAddToOrderMutation();
    const [deleteFromCart] = useDeleteFromCartMutation();

    const handleAddToOrder = async () => {
        try {
            await addToOrder({
                promptId: cartItem.prompt.id,
                includeInOrder: !cartItem.includeInOrder,
            }).unwrap();
        } catch (error) {
            /* empty */
        }
    };

    const handleDeleteFromCart = async () => {
        try {
            await deleteFromCart(cartItem.prompt.id).unwrap();
        } catch (error) {
            /* empty */
        }
    };

    const toggleFavorites = async () => {
        try {
            if (cartItem.prompt.isFavorite) {
                await deleteFromFavorites(cartItem.prompt.id);
            } else {
                await addToFavorites(cartItem.prompt.id);
            }
        } catch (error) {
            /* empty */
        }
    };

    return (
        <FlexBox
            sx={{
                gap: "15px",
                height: "128px",
                // border: "2px solid gray",
                // borderRadius: "15px",
                alignItems: "center",
                mb: 2,

                pr: 2,
            }}
        >
            <Checkbox
                color="secondary"
                checked={cartItem.includeInOrder}
                onChange={handleAddToOrder}
            />
            <Box sx={{ position: "relative" }}>
                <Image
                    src={getRandomImage(cartItem.prompt.id)}
                    height="128px"
                    width="300px"
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
                    {model.icon}
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: 13,
                            marginTop: "2px",
                            cursor: "pointer",
                        }}
                    >
                        {model.iconName}
                    </Typography>
                </Box>
            </Box>

            <FlexBox
                sx={{
                    ml: 1,
                    width: "70%",
                    flexDirection: "column",
                    alignItems: "start",
                    height: "100%",
                }}
            >
                <Box mb={3}>{cartItem.prompt.title}</Box>
                <Typography
                    color={(theme) => theme.palette.text.secondary}
                    sx={{
                        margin: 0,
                        fontSize: 14,
                        visibility: "visible",
                        maxHeight: "100px",
                        maxWidth: "500px",
                        WebkitLineClamp: "3",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "pointer",
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </Typography>
            </FlexBox>
            <FlexBox
                sx={{
                    height: "100%",
                    flexDirection: "column",
                    alignItems: "start",
                }}
            >
                <Box
                    textAlign="center"
                    sx={{
                        width: "100%",
                        height: "30%",
                        fontSize: "20px",
                        fontWeight: "500",
                    }}
                >
                    {cartItem.prompt.price} ₽
                </Box>
                <FlexBox sx={{ alignItems: "center", height: "70%" }}>
                    <IconButton onClick={toggleFavorites}>
                        {cartItem.prompt.isFavorite ? (
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
                    <IconButton onClick={handleDeleteFromCart}>
                        <DeleteIcon />
                    </IconButton>
                </FlexBox>
            </FlexBox>
        </FlexBox>
    );
});
