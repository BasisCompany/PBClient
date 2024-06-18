import { Box, Divider, Typography } from "@mui/material";
import { SocialLogin } from "./SocialLogin";

export const SocialSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                minWidth: "100px",
            }}
        >
            <SocialLogin />
            <Divider>
                <Typography
                    variant="text"
                    color={(theme) => theme.palette.text.secondary}
                >
                    ИЛИ
                </Typography>
            </Divider>
        </Box>
    );
};
