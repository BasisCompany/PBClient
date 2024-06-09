import { Box, Typography, Divider } from "@mui/material";
import { PrimaryButton } from "@/shared/ui/Buttons/PrimaryButton";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useGetCartQuery } from "@/entities/cart";

const PayCard = () => {
    return (
        <Box
            sx={{
                mt: 2,
                p: 2,
                height: "60px",
                width: "104px",
                borderRadius: "5px",
                bgcolor: (theme) => theme.palette.bgcolor.tertiary.main,
                textAlign: "center",
            }}
        >
            Карта
        </Box>
    );
};

//TODO: Вывод чисел с разделителями тысяч
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
    return (
        <Box
            sx={{
                width: "350px",
                position: "sticky",
                top: 80,
                alignSelf: "start",
                borderRadius: "5px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                p: 3,
            }}
        >
            <Box>
                <Typography variant="subtitle">Способ оплаты</Typography>
                <FlexBox
                    sx={{
                        gap: "15px",
                        overflow: "hidden",
                    }}
                >
                    <PayCard />
                    <PayCard />
                </FlexBox>
            </Box>
            <Box mt={4}>
                <Typography variant="subtitle">Ваш заказ</Typography>
                <FlexBox justifyContent="space-between" mt={2}>
                    <Typography variant="text">
                        Промпты ({cartCountIncluded})
                    </Typography>
                    <Typography variant="text">{price} ₽</Typography>
                </FlexBox>
                {/* <FlexBox justifyContent="space-between" mt={2}>
                    <Typography variant="text">Скидка</Typography>
                    <Typography variant="text" color="rgba(233,30,99,1)">
                        - {discount} ₽
                    </Typography>
                </FlexBox> */}
            </Box>
            <Divider sx={{ my: 2 }} />
            <FlexBox justifyContent="space-between">
                <Typography variant="text" fontSize="26px" fontWeight="600">
                    Итого
                </Typography>
                <Typography variant="text" fontSize="26px" fontWeight="600">
                    {price - discount} ₽
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
