import {
    Badge,
    Box,
    Divider,
    IconButton,
    Popper,
    Typography,
    styled,
} from "@mui/material";
import { FC } from "react";
import { Notification } from "./Notification";
import { LinkButton } from "../../../../UI/Buttons/LinkButton";
import { LinkIconButton } from "../../../../UI/Buttons/LinkIconButton";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

interface NotificationsPopperProps {
    isOpen: boolean;
    anchorEl: HTMLElement | null;
    handleClose: () => void;
}

const NotificationsBox = styled(Box)(({ theme }) => ({
    height: "300px",
    overflow: "auto",
    ...theme.scrollbar,
}));

export const NotificationsPopper: FC<NotificationsPopperProps> = ({
    isOpen,
    anchorEl,
    handleClose,
}) => {
    const id = isOpen ? "notifications-popover" : undefined;

    return (
        <Popper
            id={id}
            open={isOpen}
            anchorEl={anchorEl}
            placement="bottom-end"
            sx={{
                zIndex: 1250,
                backgroundColor: (theme) =>
                    theme.palette.bgcolor.modal.primary.main,
                borderRadius: "5px",
            }}
            modifiers={[
                {
                    name: "offset",
                    options: {
                        offset: [0, 10],
                    },
                },
            ]}
        >
            <Box
                sx={{
                    width: "500px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        p: 1,
                    }}
                >
                    <LinkIconButton
                        to="profile/notifications"
                        onClick={handleClose}
                    >
                        <SettingsRoundedIcon />
                    </LinkIconButton>
                    <LinkButton
                        to="profile/notifications"
                        variant="text"
                        onClick={handleClose}
                    >
                        <Typography
                            sx={{
                                color: "text.primary",
                                textTransform: "none",
                            }}
                        >
                            Уведомления
                        </Typography>
                        <Badge
                            sx={{
                                ml: 2,
                            }}
                            badgeContent={4}
                            color="secondary"
                        />
                    </LinkButton>
                    <IconButton>
                        <DoneAllIcon />
                    </IconButton>
                </Box>
                <Divider />
                <NotificationsBox>
                    {new Array(10).fill(null).map((_) => (
                        <>
                            <Notification />
                            <Divider />
                        </>
                        // <Box
                        //     key={i}
                        //     sx={{
                        //         display: "flex",
                        //         justifyContent: "center",
                        //         alignItems: "center",
                        //         height: "60px",
                        //         border: "1px solid red",
                        //     }}
                        // >
                        //     <Typography
                        //         sx={{
                        //             color: "text.primary",
                        //             textTransform: "none",
                        //         }}
                        //     >
                        //         Уведомление {i + 1}
                        //     </Typography>
                        // </Box>
                    ))}
                </NotificationsBox>
            </Box>
        </Popper>
    );
};
