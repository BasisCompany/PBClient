import { Box } from "@mui/material";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { ProfileContent } from "./ProfileTabs/ProfileContent";

export const ProfilePage = () => {
    return (
        <>
            <ProfileHeader />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                }}
            >
                <ProfileStatistic />
                <ProfileContent />
            </Box>
        </>
    );
};
