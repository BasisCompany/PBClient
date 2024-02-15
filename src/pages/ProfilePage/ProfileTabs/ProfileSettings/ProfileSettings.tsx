import { Avatar, Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { alpha } from "@mui/material/styles";
import { MyTextField } from "../../../AuthPage/components/MyTextField";

export const DeleteBtn = () => {
    return (
        <Box
            sx={{
                top: 0,
                right: 0,
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "0px 15px 0px",
                bgcolor: (theme) =>
                    alpha(theme.palette.bgcolor.tertiary.main, 0.6),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.2s ease-in",
                ":hover": {
                    cursor: "pointer",
                    transition: "all 0.2s ease-in",
                    bgcolor: "rgba(233,30,99,0.9)",
                },
            }}
        >
            <DeleteIcon sx={{ color: "#FFF" }} />
        </Box>
    );
};

export const UpdateBtn = () => {
    return (
        <Box
            sx={{
                bottom: 0,
                right: 0,
                position: "absolute",
                width: "40px",
                height: "40px",
                borderRadius: "15px 0px 15px ",
                bgcolor: (theme) =>
                    alpha(theme.palette.bgcolor.tertiary.main, 0.6),
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transition: "all 0.2s ease-in",
                ":hover": {
                    cursor: "pointer",
                    transition: "all 0.2s ease-in",
                    bgcolor: "rgba(4,154,222,0.9)",
                },
            }}
        >
            <EditIcon sx={{ color: "#FFF" }} />
        </Box>
    );
};

export const ProfileSettings = () => {
    return (
        <Box>
            <Box
                sx={{
                    borderRadius: "15px",
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                }}
            >
                <Box sx={{}}>
                    <Typography
                        component="div"
                        variant="h6"
                        color="text.primary"
                        sx={{
                            fontSize: { xs: 19, sm: 24, lg: 26 },
                            fontWeight: "500",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                            p: 2,
                        }}
                    >
                        Профиль
                    </Typography>

                    <Box
                        sx={{
                            display: "flex",
                            m: 2,
                        }}
                    >
                        <Box
                            sx={{
                                mr: 1,
                                position: "relative",
                            }}
                        >
                            <Avatar
                                alt={"s"}
                                src={
                                    "https://styles.redditmedia.com/t5_2ewfae/styles/profileIcon_ilzhrv7d81nb1.png?width=256&height=256&crop=256:256,smart&s=844ae838ed01e71c9b990bc8760853abd290f6b4"
                                }
                                variant="square"
                                sx={{
                                    borderRadius: "15px",
                                    width: {
                                        xs: "100px",
                                        md: "125px",
                                        lg: "150px",
                                    },
                                    height: {
                                        xs: "100px",
                                        md: "125px",
                                        lg: "150px",
                                    },
                                }}
                            />
                            <DeleteBtn />
                            <UpdateBtn />
                        </Box>
                        <Box sx={{ flexBasis: "85%", position: "relative" }}>
                            <Avatar
                                alt={"s"}
                                src={
                                    "https://styles.redditmedia.com/t5_2ewfae/styles/profileBanner_geaz0lw3ghic1.jpg?width=1280&height=384&crop=1280:384,smart&s=0f9489c666767cfbcebde4008248eb0956961970"
                                }
                                variant="square"
                                sx={{
                                    borderRadius: "15px",
                                    width: "100%",
                                    height: {
                                        xs: "100px",
                                        md: "125px",
                                        lg: "150px",
                                    },
                                }}
                            />
                            <DeleteBtn />
                            <UpdateBtn />
                        </Box>
                    </Box>
                    <MyTextField
                        sx={{
                            m: 2,
                            bgcolor: (theme) => theme.palette.bgcolor.tertiary,
                        }}
                        label="Текст"
                    />
                    <MyTextField
                        sx={{
                            m: 2,
                            bgcolor: (theme) => theme.palette.bgcolor.tertiary,
                        }}
                        label="Текст"
                    />
                    <MyTextField
                        sx={{
                            m: 2,
                            bgcolor: (theme) => theme.palette.bgcolor.tertiary,
                        }}
                        label="Текст"
                    />
                </Box>
            </Box>
        </Box>
    );
};

/* <Typography
                color={(theme) => theme.palette.text.primary}
                fontWeight={500}
                sx={{
                    borderBottom: "1px solid gray",
                }}
            >
                Безопасность
            </Typography>
            <MyTextField label="Текст" />
            <SettingsSecure /> */
