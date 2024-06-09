import { FC, memo } from "react";
import { Box, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { FlexBox } from "@/shared/ui/FlexBox";
import {
    useAddToOrderMutation,
    useDeleteFromCartMutation,
} from "@/entities/cart";
import { CartItem } from "@/entities/cart/model/types";

interface CartPromptItemProps {
    cartItem: CartItem;
}

export const CartPromptItem: FC<CartPromptItemProps> = memo(({ cartItem }) => {
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

    return (
        <FlexBox
            sx={{
                gap: "15px",
                height: "100px",
                border: "2px solid gray",
                borderRadius: "15px",
                alignItems: "center",
                mb: 1,
                p: 1,
                pr: 2,
            }}
        >
            <Checkbox
                color="secondary"
                checked={cartItem.includeInOrder}
                onChange={handleAddToOrder}
            />
            <Box>Картинка</Box>
            <FlexBox justifyContent="space-between" width="100%">
                <Box>{cartItem.prompt.title}</Box>
                <Box>
                    <Box textAlign="center">{cartItem.prompt.price} ₽</Box>
                    <FlexBox>
                        <IconButton>
                            <BookmarkIcon />
                        </IconButton>
                        <IconButton onClick={handleDeleteFromCart}>
                            <DeleteIcon />
                        </IconButton>
                    </FlexBox>
                </Box>
            </FlexBox>
        </FlexBox>
    );
});
