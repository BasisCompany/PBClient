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
                width: { xs: "100%", md: "20%" },
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

                    width: { xs: "25%", md: "80%" },
                    minWidth: { xs: "180px", md: "120px" },
                }}
            >
                <Avatar
                    alt="Remy Sharp"
                    src={urlAvatarImage}
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
};
