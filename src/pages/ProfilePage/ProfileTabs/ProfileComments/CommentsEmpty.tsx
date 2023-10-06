import { Box, Typography } from "@mui/material";
import { PromptBuyIcon } from "../../../../assets/PromptBuyIcon";

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
            <PromptBuyIcon
                sx={{
                    fontSize: { xs: "30vw", md: "30vh" },
                    height: { xs: "10vw", md: "10vh" },
                }}
            />
            <Typography sx={{ textAlign: "center", mt: 2 }}>
                Пока здесь нет комментариев
            </Typography>
        </Box>
    </Box>
);
