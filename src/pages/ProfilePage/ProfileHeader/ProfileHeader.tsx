import { FC } from "react";
import { Box, Card } from "@mui/material";
import { HeaderCover } from "./HeaderCover";
import { HeaderAvatar } from "./HeaderAvatar";
import { HeaderAbout } from "./HeaderAbout";
import { HeaderButtons } from "./HeaderButtons";
import { UserAbout } from "../../../types/user.type";
import { URL_ROOT } from "../../../consts/api";

interface ProfileHeaderProps {
    userAbout: UserAbout;
}

export const ProfileHeader: FC<ProfileHeaderProps> = ({ userAbout }) => {
    return (
        <Card
            sx={{
                //bgcolor: "#766",
                position: "relative",
                width: "100%",
                height: "450px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mb: "15px",
            }}
        >
            <HeaderCover urlCoverImage={userAbout.avatar} />
            <Box
                sx={{
                    //bgcolor: "#651",
                    bgcolor: "bgcolor.secondary.main",
                    width: "100%",
                    top: { xs: "200px", md: "300px" },
                    height: { xs: "250px", md: "150px" },
                    position: "absolute",
                    borderRadius: "30px 30px 0px 0px",
                    display: "flex",
                    padding: "15px",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <HeaderAvatar userAbout={userAbout} />
                <HeaderAbout name={userAbout.username} status={"Flex"} />
                <HeaderButtons />
            </Box>
        </Card>
    );
};
