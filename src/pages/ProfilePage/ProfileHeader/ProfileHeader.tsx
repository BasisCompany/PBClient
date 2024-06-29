import { Box } from "@mui/material";
import { HeaderCover } from "./HeaderCover";
import { HeaderAvatar } from "./HeaderAvatar";
import { HeaderAbout } from "./HeaderAbout";
import { HeaderButtons } from "./HeaderButtons";

export const ProfileHeader = () => {
    return (
        <Box
            sx={{
                //bgcolor: "#766",
                position: "relative",
                width: "100%",
                height: "350px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "15px",
                mb: { xs: "35px", md: "15px" },
            }}
        >
            <HeaderCover />
            <Box
                sx={{
                    //bgcolor: "#651",
                    bgcolor: "bgcolor.secondary.main",
                    width: "100%",
                    top: { xs: "120px", md: "200px" }, //     top: { xs: "100px", md: "300px" },
                    height: { xs: "250px", md: "150px" },
                    position: "absolute",
                    borderRadius: "30px 30px 0px 0px",
                    display: "flex",
                    padding: "15px",
                    flexDirection: { xs: "column", md: "row" },
                }}
            >
                <HeaderAvatar />
                <HeaderAbout />
                <HeaderButtons />
            </Box>
        </Box>
    );
};
