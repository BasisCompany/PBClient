import { Box, Checkbox, Typography } from "@mui/material";
import { CartPromptItem } from "./CartPromptItem";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useAddAllToOrderMutation, useGetCartQuery } from "@/entities/cart";
import { SecondaryBox } from "@/shared/ui/Box/SecondaryBox";

export const CartContent = () => {
    const { data } = useGetCartQuery();

    const cartItems = data?.cartItems ?? [];
    const cartCount = cartItems.length;

    const [addAllToOrder] = useAddAllToOrderMutation();

    const cartCountIncluded = cartItems.reduce(
        (count, { includeInOrder }) => count + (includeInOrder ? 1 : 0),
        0
    );
    const isAllIncludeInOrder = cartCount === cartCountIncluded;

    const handleAddAllToOrder = async () => {
        await addAllToOrder({
            includeInOrder: !isAllIncludeInOrder,
        });
    };

    return (
        <SecondaryBox flex={1} alignSelf="start" p={3}>
            <FlexBox alignItems="center" gap="8px">
                <Typography variant="title">Корзина</Typography>
                <Typography
                    variant="text"
                    fontSize={14}
                    color={(theme) => theme.palette.text.secondary}
                    pt={1}
                >
                    {cartCount} промпта
                </Typography>
            </FlexBox>

            <FlexBox alignItems="center" ml={1}>
                <Checkbox
                    checked={isAllIncludeInOrder}
                    color="secondary"
                    onClick={handleAddAllToOrder}
                />
                <Typography variant="text" pt={0.2}>
                    Выбрать все
                </Typography>
                {/* //TODO: Правильные окончания для слов: Выбрано, промпта*/}
                {cartCountIncluded > 0 && (
                    <Typography
                        variant="text"
                        fontSize={14}
                        color={(theme) => theme.palette.text.secondary}
                        pt={0.3}
                        ml={1}
                    >
                        Выбрано {cartCountIncluded} промпта
                    </Typography>
                )}
            </FlexBox>

            <Box>
                {cartItems.map((cartItem) => (
                    <CartPromptItem
                        key={cartItem.prompt.id}
                        cartItem={cartItem}
                    />
                ))}
            </Box>
        </SecondaryBox>
    );
};
