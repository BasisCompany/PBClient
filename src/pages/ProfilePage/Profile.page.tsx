import { Box, Card } from "@mui/material";
import { ProfileStatistic } from "./ProfileStatistic/ProfileStatistic";
import { ProfileHeader } from "./ProfileHeader/ProfileHeader";
import { ProfileWrapper } from "./ProfileWrapper";

export const ProfilePage = () => {
    return (
        <ProfileWrapper>
            <ProfileHeader />
            <Box sx={{ display: "flex" }}>
                <ProfileStatistic />
                {/* <Card
                    sx={{
                        bgcolor: "#966",
                        position: "relative",
                        width: "calc(80% - 15px)",
                        height: "450px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "15px",
                    }}
                ></Card> */}
            </Box>
        </ProfileWrapper>
    );
};
