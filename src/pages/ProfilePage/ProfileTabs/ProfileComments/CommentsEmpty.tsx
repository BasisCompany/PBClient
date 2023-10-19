import { Box, Typography } from "@mui/material";
import { PromptBuyIcon } from "../../../../assets/PromptBuyIcon";
import { CatIcon } from "../../../../assets/Cat";

export const CommentsEmpty = () => (
    <Box
        sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "300px",
        }}
    >
        <Box>
            {/*TODO[Артем]: Изменить картинку и прозрачность*/}
            <CatIcon
                sx={{
                    fontSize: { xs: "50vw", md: "50vh" },
                    height: { xs: "50vw", md: "50vh" },
                }}
            />
            <Typography sx={{ textAlign: "center", mt: 2 }}>
                Пока здесь нет комментариев
            </Typography>
        </Box>
    </Box>
);
