import { Box, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { PrimaryLinkButton } from "@/shared/ui/Buttons/PrimaryButton";
import { FlexBox } from "@/shared/ui/FlexBox";

export const NotFoundProfile = () => {
    return (
        <FlexBox
            sx={{
                justifyContent: "center",
                alignItems: "center",
                height: "calc(100vh - 300px)",
            }}
        >
            <Box textAlign="center">
                <SearchOffIcon sx={{ fontSize: 120, mb: 2 }} />
                <Typography variant="title">Пользователь не найден</Typography>
                <PrimaryLinkButton to="/" sx={{ my: 3 }}>
                    Перейти на главную
                </PrimaryLinkButton>
            </Box>
        </FlexBox>
    );
};
