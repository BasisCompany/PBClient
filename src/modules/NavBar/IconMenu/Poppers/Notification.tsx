import { Avatar, Box, IconButton, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { Spacer } from "../../../../UI/Spacer";
import { useMemo, useState } from "react";

export const Notification = () => {
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
                backgroundColor: (theme) =>
                    theme.palette.bgcolor.modal.primary.main,
                transition: "all 0.1s ease-in",
                ":hover": {
                    backgroundColor: (theme) =>
                        theme.palette.bgcolor.modal.primary.hover,
                    transition: "all 0.1s ease-out",
                },
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            {/*//TODO: Ссылка на карточку  */}
            <Avatar
                alt="Remy Sharp"
                src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                variant="square"
            />
            {/* <Box
                component="img"
                src="https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg"
                sx={{
                    height: "40px",
                }}
            /> */}
            <Box
                sx={{
                    ml: 1,
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
                    Asian Art T-shirt Designs {/*//TODO: Ссылка на карточку  */}
                    <Typography
                        variant="h6"
                        component="span"
                        color="#bfbfc0"
                        sx={{
                            marginBottom: "4px",
                            fontSize: 14,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                        }}
                    >
                        {randomTime}
                    </Typography>
                </Typography>
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
                    {/*//TODO: Ссылка на комментарий  */}
                    {randomType}
                </Typography>
            </Box>
            <Spacer />
            {showCheckArrows && (
                <IconButton
                    sx={{
                        color: "text.primary",
                    }}
                >
                    <DoneIcon />
                </IconButton>
            )}
        </Box>
    );
};
