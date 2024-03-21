import { Box, Typography } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { usePopper } from "../../ui/NavbarPopper";
import { FlexBox } from "@/shared/ui/FlexBox";
import { LinkListItemButton } from "@/shared/ui/Links/LinkListItemButton";
import { Spacer } from "@/shared/ui/Spacer";
import { useAuth } from "@/shared/hooks/useAuth";
import { Avatar } from "@/shared/ui/Image/Avatar";

export const AccountInfo = () => {
    const { closePopper } = usePopper();
    const { user } = useAuth();
    return (
        <Box
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.bgcolor.modal.secondary.main,
                margin: 2,
                mb: 0,
                borderRadius: "10px",
            }}
        >
            <LinkListItemButton
                to={`user/${user?.id}`}
                onClick={closePopper}
                sx={{
                    borderRadius: "10px 10px 0px 0px",
                    ":hover": {
                        backgroundColor: (theme) =>
                            theme.palette.bgcolor.modal.secondary.hover,
                    },
                }}
                divider
            >
                <FlexBox
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: 2,
                        paddingLeft: 1,
                    }}
                >
                    <Avatar
                        src={user?.thumb}
                        alt={user?.username}
                        width="40px"
                        height="40px"
                        borderRadius="50%"
                    />
                    <Box ml={2}>
                        <Typography>{user?.username}</Typography>
                        <Typography>{user?.email}</Typography>
                    </Box>
                </FlexBox>
                <ChevronRightIcon
                    sx={{
                        color: "text.primary",
                    }}
                />
            </LinkListItemButton>
            <LinkListItemButton
                to={`user/${user?.id}/payments`}
                onClick={closePopper}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "start",
                    borderRadius: "0px 0px 10px 10px",
                    ":hover": {
                        backgroundColor: (theme) =>
                            theme.palette.bgcolor.modal.secondary.hover,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "5px",
                    }}
                >
                    <AccountBalanceWalletIcon
                        sx={{
                            color: "text.primary",
                            mr: 1.5,
                        }}
                    />
                    <Typography
                        sx={{
                            textAlign: "center",
                            verticalAlign: "center",
                            mt: "3px",
                        }}
                    >
                        0 ₽
                    </Typography>
                </Box>
                <Spacer />
                <AddCircleOutlineIcon
                    sx={{
                        color: "text.primary",
                    }}
                />
            </LinkListItemButton>
        </Box>
    );
};
