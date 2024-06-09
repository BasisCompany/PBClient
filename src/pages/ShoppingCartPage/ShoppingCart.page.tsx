import { Box, Typography } from "@mui/material";
import { CartSidebar } from "./CartSidebar";
import { CartContent } from "./CartContent";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useGetCartQuery } from "@/entities/cart";
import { PrimaryButton } from "@/shared/ui/Buttons/PrimaryButton";

export const ShoppingCartPage = () => {
    const { data } = useGetCartQuery();
    const cartItems = data?.cartItems ?? [];

    if (cartItems.length === 0) {
        return <EmptyShoppingCart />;
    }

    return (
        <FlexBox gap="50px" mt={2}>
            <CartContent />
            <CartSidebar />
        </FlexBox>
    );
};

const EmptyShoppingCart = () => {
    return (
        <FlexBox
            sx={{
                justifyContent: "center",
                alignSelf: "start",
                borderRadius: "5px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                p: 3,
                mt: 2,
            }}
        >
            <Box maxWidth="400px" textAlign="center">
                <Typography variant="title">В корзине пока пусто</Typography>
                <Typography
                    variant="text"
                    color={(theme) => theme.palette.text.secondary}
                    py={2}
                >
                    Загляните на главную, чтобы выбрать товары или найдите
                    нужное в поиске
                </Typography>
                <PrimaryButton sx={{ my: 2 }}>Перейти на главную</PrimaryButton>
            </Box>
        </FlexBox>
    );
};
