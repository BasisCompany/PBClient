import { Box, Card } from "@mui/material";
import { HeaderCover } from "./HeaderCover";
import { HeaderAvatar } from "./HeaderAvatar";

export const ProfileHeader = () => {
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
            <HeaderCover urlCoverImage="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg" />
            <Box
                sx={{
                    //bgcolor: "#651",
                    bgcolor: "primary.main",
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
                <HeaderAvatar urlAvatarImage="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg" />
                {/* <HeaderAbout name={"Molot"} status={"Flex"} />
                <HeaderButtons /> */}
            </Box>
        </Card>
    );
};
