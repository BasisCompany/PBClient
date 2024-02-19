import { FC } from "react";
import {
    Popper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Box,
    styled,
    MenuListProps,
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAuth } from "../../../../../shared/hooks/useAuth";
import { Comment } from "../../../../../types/comments.type";
import { Authorization } from "../../../../../lib/authorization";
import { POLICIES } from "../../../../../lib/authorization/policies";

const PooperMenuList = styled(MenuList, {
    shouldForwardProp: (prop) => prop !== "bgcolorSecondary",
})<MenuListProps & { bgcolorSecondary: boolean }>(
    ({ theme, bgcolorSecondary }) => ({
        borderRadius: "5px",
        "& .MuiMenuItem-root": {
            "& .MuiListItemIcon-root": {
                mr: -0.5,
            },
        },
        "& .MuiSvgIcon-root": {
            fontSize: 20,
        },
        backgroundColor: bgcolorSecondary
            ? theme.palette.bgcolor.modal.secondary.main
            : theme.palette.bgcolor.modal.primary.main,

        "& .MuiMenuItem-root:hover": {
            backgroundColor: bgcolorSecondary
                ? theme.palette.bgcolor.modal.secondary.hover
                : theme.palette.bgcolor.modal.primary.hover,
        },
    })
);

interface CommentPopperMenuProps {
    comment: Comment;
    menuAnchor: HTMLElement | null;
    onMenuClose: () => void;
    handleReport: () => void;
    handleDelete: () => Promise<void>;
    bgcolorSecondary?: boolean;
}

export const CommentPopperMenu: FC<CommentPopperMenuProps> = ({
    comment,
    menuAnchor,
    onMenuClose,
    handleReport,
    handleDelete,
    bgcolorSecondary = false,
}) => {
    const { user } = useAuth();
    const open = Boolean(menuAnchor);

    const onClickReport = () => {
        onMenuClose();
        handleReport();
    };

    const onClickDelete = () => {
        onMenuClose();
        void handleDelete();
    };

    return (
        <Popper
            open={open}
            anchorEl={menuAnchor}
            placement="bottom-end"
            transition
            disablePortal
        >
            {({ TransitionProps }) => (
                <Grow {...TransitionProps}>
                    <Box>
                        <ClickAwayListener onClickAway={onMenuClose}>
                            <PooperMenuList bgcolorSecondary={bgcolorSecondary}>
                                <Authorization
                                    policyCheck={
                                        !POLICIES["comment:delete"](
                                            user!,
                                            comment
                                        )
                                    }
                                >
                                    <MenuItem onClick={onClickReport}>
                                        <ListItemIcon>
                                            <ReportIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            Пожаловаться на отзыв
                                        </ListItemText>
                                    </MenuItem>
                                </Authorization>
                                <Authorization
                                    policyCheck={POLICIES["comment:delete"](
                                        user!,
                                        comment
                                    )}
                                >
                                    <MenuItem onClick={onClickDelete}>
                                        <ListItemIcon>
                                            <DeleteIcon />
                                        </ListItemIcon>
                                        <ListItemText>Удалить</ListItemText>
                                    </MenuItem>
                                </Authorization>
                            </PooperMenuList>
                        </ClickAwayListener>
                    </Box>
                </Grow>
            )}
        </Popper>
    );
};
