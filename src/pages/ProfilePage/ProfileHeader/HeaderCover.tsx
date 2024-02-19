import { Box, CardMedia } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { ProfileButton } from "../../../shared/ui/ProfileButton";

export interface HeaderCoverProps {
    urlCoverImage?: string;
}
//TODO[Артем]: Убрать CardMedia и переписать на  Box
export const HeaderCover: React.FC<HeaderCoverProps> = ({ urlCoverImage }) => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "330px",
                position: "absolute",
            }}
        >
            <CardMedia
                component="img"
                height="100%"
                image={urlCoverImage}
                alt="Paella dish"
            />
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
