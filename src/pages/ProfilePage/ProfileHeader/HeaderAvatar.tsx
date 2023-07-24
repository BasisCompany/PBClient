import { Box, Avatar } from "@mui/material";

export interface HeaderAvatarProps {
    urlAvatarImage: string;
}

export const HeaderAvatar: React.FC<HeaderAvatarProps> = ({
    urlAvatarImage,
}) => {
    return (
        <Box
            sx={{
                //bgcolor: "#588",
                position: "relative",
                width: { xs: "100%", md: "30%" },
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    //bgcolor: "#988",
                    position: "absolute",
                    top: "0%",

                    transform: "translateY(-60%)",

                    width: { xs: "25%", md: "60%" },
                    minWidth: "180px",
                }}
            >
                <Avatar
                    alt="Remy Sharp"
                    src={urlAvatarImage}
                    sx={{
                        border: "5px solid",
                        borderColor: "primary.main",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Box>
        </Box>
    );
};
