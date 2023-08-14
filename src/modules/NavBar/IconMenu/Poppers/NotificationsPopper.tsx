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
import ChecklistIcon from "@mui/icons-material/Checklist";
import TuneIcon from "@mui/icons-material/Tune";
import { Notification } from "./Notification";
import { LinkButton } from "../../../../UI/Buttons/LinkButton";
import { LinkIconButton } from "../../../../UI/Buttons/LinkIconButton";

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
                backgroundColor: "primary.main",
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
                        <TuneIcon />
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
                        <ChecklistIcon />
                    </IconButton>
                </Box>
                <Divider />
                <NotificationsBox>
                    {[...new Array(10)].map((_) => (
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
