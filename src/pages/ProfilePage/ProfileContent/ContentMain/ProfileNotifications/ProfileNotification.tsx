import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Spacer } from "../../../../../UI/Spacer";
import { useMemo } from "react";
import CloseIcon from "@mui/icons-material/Close";

export const ContentMainNotification = ({ i }: { i: number }) => {
    const randomType = useMemo(() => {
        return Math.random() > 0.5
            ? "Пользователь {username} оставил(а) комментарий"
            : "Был куплен";
    }, []);

    const randomTime = useMemo(() => {
        return Math.random() > 0.5
            ? "около 10 часов назад"
            : "около 1 дня назад";
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                p: 1,
                pl: 0,
                mb: 1,
                height: "90px",
                bgcolor:
                    i < 5
                        ? (theme) => theme.palette.bgcolor.secondary.main
                        : "none",
                borderRadius: "4px",
                transition: "all 0.1s ease-in",
                ":hover": {
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.hover,
                    transition: "all 0.1s ease-out",
                },
            }}
        >
            <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                variant="square"
                sx={{
                    width: 85,
                    height: 85,
                    borderRadius: "4px 0px 0px 4px",
                    p: "5px",
                }}
            />
            <Box
                sx={{
                    ml: 1,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "5px",
                        rowGap: "0px",
                        lineHeight: 1,
                        alignItems: "center",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        color="text.primary"
                        sx={{
                            fontSize: 15,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        Asian Art T-shirt Designs
                    </Typography>
                    <Typography
                        variant="h6"
                        component="span"
                        color="#bfbfc0"
                        sx={{
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        {randomTime}
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    component="span"
                    color="text.primary"
                    sx={{
                        marginBottom: "4px",
                        fontSize: 15,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                    }}
                >
                    {randomType}
                </Typography>
            </Box>
            <Spacer />
            <Box sx={{ height: "100%" }}>
                <IconButton
                    sx={{
                        color: "text.primary",
                    }}
                >
                    <CloseIcon sx={{ fontSize: "18px" }} />
                </IconButton>
            </Box>
        </Box>
    );
};
