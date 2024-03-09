import { Box } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useProfileUser } from "@/entities/user";
import { Image } from "@/shared/ui/Image";
import { ProfileButton } from "@/shared/ui/ProfileButton";

export const HeaderCover = () => {
    const { banner, username } = useProfileUser();
    return (
        <Box
            sx={{
                width: "100%",
                height: "330px",
                position: "absolute",
            }}
        >
            {banner ? (
                <Image
                    src={banner}
                    alt={username}
                    showError={false}
                    height="100%"
                    borderRadius="15px"
                />
            ) : (
                <Box
                    height="100%"
                    bgcolor={(theme) => theme.palette.secondary.main}
                    borderRadius="15px"
                />
            )}
            <ProfileButton
                sx={{
                    width: { xs: "57px", md: "255px" },
                    height: "46px",
                    position: "absolute",
                    top: "25px",
                    right: "25px",
                }}
            >
                <Box
                    sx={{
                        //bgcolor: "#489",
                        width: "57px",
                        display: "flex",
                        justifyContent: "center",
                        height: "100%",
                    }}
                >
                    <EditRoundedIcon
                        sx={{
                            fontSize: 33,
                            //bgcolor: "#500",
                            height: "100%",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        //bgcolor: "#734",
                        height: "100%",
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        width: "208px",
                        alignItems: "center",
                        fontSize: 19,
                    }}
                >
                    Изменить обложку
                </Box>
            </ProfileButton>
        </Box>
    );
};
