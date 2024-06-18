import { Box } from "@mui/material";
import { PromptBuyIcon } from "@/assets/PromptBuyIcon";

export const LoginLogo = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Box
                sx={{
                    height: "125px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <PromptBuyIcon
                    sx={{
                        width: "7em",
                        height: "7em",
                    }}
                />
            </Box>
        </Box>
    );
};
