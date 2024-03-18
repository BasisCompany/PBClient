import { Box } from "@mui/material";
import { useProfileUser } from "@/entities/user";
import { FlexBox } from "@/shared/ui/FlexBox";
import { Avatar } from "@/shared/ui/Image/Avatar";

export const HeaderAvatar = () => {
    const { username, avatar } = useProfileUser();
    return (
        <FlexBox
            sx={{
                justifyContent: "center",
                position: "relative",
                width: { xs: "100%", md: "300px" },
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    transform: "translateY(-60%)",
                    width: { xs: "180px", md: "220px" },
                    height: { xs: "180px", md: "220px" },
                }}
            >
                <Avatar
                    src={avatar}
                    alt={username}
                    sx={{
                        border: "5px solid",
                        borderColor: (theme) =>
                            theme.palette.bgcolor.secondary.main,
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                    }}
                />
            </Box>
        </FlexBox>
    );
};

/*
    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", md: "20%" },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    top: "0%",
                    transform: "translateY(-60%)",
                    width: { xs: "25%", md: "80%" },
                    maxWidth: "280px",
                    minWidth: { xs: "180px", md: "120px" },
                }}
            >
                <Avatar
                    alt={userAbout.username}
                    src={avatar}
                    sx={{
                        border: "5px solid",
                        borderColor: "bgcolor.secondary.main",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
        </Box>
    );

*/
