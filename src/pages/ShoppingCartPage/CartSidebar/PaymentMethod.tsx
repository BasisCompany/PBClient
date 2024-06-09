import { Box, Typography } from "@mui/material";
import { FlexBox } from "@/shared/ui/FlexBox";

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

export const PaymentMethod = () => {
    return (
        <Box>
            <Typography variant="subtitle">Способ оплаты</Typography>
            <FlexBox gap="15px" overflow="hidden">
                <PayCard />
                <PayCard />
            </FlexBox>
        </Box>
    );
};
