import {
    Box,
    Card,
    CardMedia,
    Container,
    Typography,
    Avatar,
    Chip,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import FaceIcon from "@mui/icons-material/Face";
import Button, { ButtonProps } from "@mui/material/Button";

import { styled } from "@mui/material/styles";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    textTransform: "none",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    color: theme.palette.text.primary,
    "&:hover": {
        backgroundColor: theme.palette.action.hover,
    },
}));

export const ProfilePage = () => {
    return (
        <Box
            sx={{
                mt: "15px",
                mb: "15px",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                //bgcolor: "#687",
            }}
        >
            <Container
                maxWidth="xl"
                sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    //bgcolor: "#987",
                }}
            >
                <Card
                    sx={{
                        //bgcolor: "#766",
                        position: "relative",
                        width: "100%",
                        height: "450px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "15px",
                    }}
                >
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
                            image="https://uprostim.com/wp-content/uploads/2021/04/image052-37.jpg"
                            alt="Paella dish"
                        />

                        <ColorButton
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
                        </ColorButton>
                    </Box>
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
                            //justifyContent: "center",
                            flexDirection: { xs: "column", md: "row" },
                        }}
                    >
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
                                }}
                            >
                                <Avatar
                                    alt="Remy Sharp"
                                    src="https://distribution.faceit-cdn.net/images/173415c2-b6c3-4ece-8495-766cffa9d710.jpeg"
                                    sx={{
                                        border: "5px solid",
                                        borderColor: "primary.main",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                mt: { xs: "10%", md: "0%" },
                                //bgcolor: "#869",
                                width: { xs: "100%", md: "37%" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                sx={{
                                    //bgcolor: "#690",
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    color="text.primary"
                                    sx={{
                                        fontSize: { sx: 27, md: 37 },
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        cursor: "default",
                                        WebkitLineClamp: "1",
                                    }}
                                >
                                    Molot
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    //bgcolor: "#697",
                                    mb: { xs: "5px", md: "0" },
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },
                                    height: "33%",
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    color="text.primary"
                                    sx={{
                                        fontSize: 16,
                                        whiteSpace: "nowrap",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        cursor: "default",
                                        WebkitLineClamp: "1",
                                    }}
                                >
                                    Flex
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    //bgcolor: "#620",

                                    height: "33%",
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },
                                    alignItems: "center",
                                }}
                            >
                                <Chip
                                    icon={<FaceIcon />}
                                    label="With Icon"
                                    variant="outlined"
                                />
                                <Chip
                                    sx={{ ml: "15px", borderRadius: "none" }}
                                    icon={<FaceIcon />}
                                    label="With Icon"
                                    variant="outlined"
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                //bgcolor: "#810",
                                mt: { xs: "10px", md: "0" },
                                width: {
                                    xs: "100%",
                                    md: "33%",
                                },
                                display: "flex",
                                justifyContent: "space-around",
                            }}
                        >
                            <ColorButton
                                sx={{
                                    width: "75%",
                                    height: "46px",
                                    fontSize: 16,
                                    border: "1px solid white",
                                    lineHeight: 1.3,
                                }}
                            >
                                Редактировать профиль
                            </ColorButton>
                            <ColorButton
                                sx={{
                                    width: "20%",
                                    height: "46px",
                                    fontSize: 16,
                                    border: "1px solid white",
                                }}
                            >
                                Еще
                            </ColorButton>
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Box>
    );
};
