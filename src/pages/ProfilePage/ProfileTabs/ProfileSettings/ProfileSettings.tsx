import { Typography } from "@mui/material";
import { SettingsSecure } from "./SettingsSecure/SettingsSecure";

export const ProfileSettings = () => {
    return (
        <>
            <Typography
                variant="h4"
                color={(theme) => theme.palette.text.primary}
                fontWeight={500}
                sx={{
                    borderBottom: "1px solid gray",
                }}
            >
                Безопасность
            </Typography>
            <SettingsSecure />
        </>
    );
};
