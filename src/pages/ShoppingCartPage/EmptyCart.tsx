import { Box, Typography } from "@mui/material";
import { PrimaryButton } from "@/shared/ui/Buttons/PrimaryButton";
import { FlexBox } from "@/shared/ui/FlexBox";

export const EmptyCart = () => {
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
