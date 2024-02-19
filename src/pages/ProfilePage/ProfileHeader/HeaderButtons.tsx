import { Box } from "@mui/material";

import { ProfileButton } from "../../../shared/ui/ProfileButton";

export const HeaderButtons = () => {
    return (
        <Box
            sx={{
                //bgcolor: "#810",
                mt: { xs: "10px", md: "0" },
                width: {
                    xs: "100%",
                    md: "33%",
                },
                display: "flex",
                justifyContent: "space-around",
            }}
        >
            <ProfileButton
                sx={{
                    width: "75%",
                    height: "46px",
                    fontSize: 16,
                    border: "1px solid white",
                    lineHeight: 1.3,
                }}
            >
                Редактировать профиль
            </ProfileButton>
            <ProfileButton
                sx={{
                    width: "20%",
                    height: "46px",
                    fontSize: 16,
                    border: "1px solid white",
                }}
            >
                Еще
            </ProfileButton>
        </Box>
    );
};
