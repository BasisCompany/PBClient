import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { Spacer } from "../../../../../UI/Spacer";
import { useMemo, useState } from "react";
import DoneIcon from "@mui/icons-material/Done";
export const ContentMainNotification = () => {
    const [showCheckArrows, setShowCheckArrows] = useState(false);

    const handleMouseOver = () => {
        setShowCheckArrows(true);
    };

    const handleMouseOut = () => {
        setShowCheckArrows(false);
    };
    const randomType = useMemo(() => {
        return Math.random() > 0.5 ? "Был оставлен комментарий" : "Был куплен";
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
                height: "70px",
                borderRadius: "4px",
                bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
                transition: "all 0.1s ease-in",
                ":hover": {
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.hover,
                    transition: "all 0.1s ease-out",
                },
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                variant="square"
                sx={{ width: 70, height: 70, borderRadius: "4px 0px 0px 4px" }}
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
            {showCheckArrows && (
                <IconButton
                    sx={{
                        color: "text.primary",
                        borderRadius: "4px",
                    }}
                >
                    <DoneIcon />
                </IconButton>
            )}
        </Box>
    );
};
