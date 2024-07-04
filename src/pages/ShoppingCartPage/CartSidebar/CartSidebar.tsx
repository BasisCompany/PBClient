import { Box, Typography, Divider, alpha } from "@mui/material";
import { PaymentMethod } from "./PaymentMethod";
import { PrimaryButton } from "@/shared/ui/Buttons/PrimaryButton";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useGetCartQuery } from "@/entities/cart";
import { pbColors } from "@/app/providers/Theme";

export const CartSidebar = () => {
    const { data } = useGetCartQuery();

    const cartItems = data?.cartItems ?? [];

    const cartCountIncluded = cartItems.reduce(
        (count, item) => count + Number(item.includeInOrder),
        0
    );

    const price = cartItems.reduce(
        (sum, { includeInOrder, prompt }) =>
            includeInOrder ? sum + prompt.price : sum,
        0
    );
    const discount = 0;

    const totalPrice = price - discount;
    return (
        <Box
            sx={{
                width: "350px",
                position: "sticky",
                top: 80,
                alignSelf: "start",
                borderRadius: "15px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                p: 3,
            }}
        >
            <PaymentMethod />
            <Box mt={4}>
                <Typography variant="subtitle">Ваш заказ</Typography>
                <FlexBox justifyContent="space-between" mt={2}>
                    <Typography variant="text">
                        Промпты ({cartCountIncluded})
                    </Typography>
                    <Typography variant="text">
                        {price.toLocaleString()} ₽
                    </Typography>
                </FlexBox>
                {discount > 0 && (
                    <FlexBox justifyContent="space-between" mt={2}>
                        <Typography variant="text">Скидка</Typography>
                        <Typography
                            variant="text"
                            color={alpha(pbColors.red, 1)}
                        >
                            - {discount} ₽
                        </Typography>
                    </FlexBox>
                )}
            </Box>
            <Divider sx={{ my: 2 }} />
            <FlexBox justifyContent="space-between">
                <Typography variant="text" fontSize="26px" fontWeight="600">
                    Итого
                </Typography>
                <Typography variant="text" fontSize="26px" fontWeight="600">
                    {totalPrice.toLocaleString()} ₽
                </Typography>
            </FlexBox>
            <PrimaryButton sx={{ my: 2 }}>Оплатить</PrimaryButton>
            <Typography
                variant="text"
                fontSize={14}
                color={(theme) => theme.palette.text.secondary}
            >
                Нажимая на кнопку, вы соглашаетесь с Условиями обработки
                персональных данных, а также с Условиями продажи
            </Typography>
        </Box>
    );
};
