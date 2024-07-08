import { Box, Typography } from "@mui/material";
import CommentsDisabledIcon from "@mui/icons-material/CommentsDisabled";
import { FlexBox } from "@/shared/ui/FlexBox";

export const CommentsEmpty = () => (
    <FlexBox
        sx={{
            justifyContent: "center",
            alignItems: "center",
            minHeight: "250px",
        }}
    >
        <Box textAlign="center">
            <CommentsDisabledIcon sx={{ fontSize: 80, mb: 3 }} />
            <Typography fontSize={18}>Пока здесь нет комментариев</Typography>
        </Box>
    </FlexBox>
);
