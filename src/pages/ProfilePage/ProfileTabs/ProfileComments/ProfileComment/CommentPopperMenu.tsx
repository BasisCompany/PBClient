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
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";

const PooperMenuList = styled(MenuList)({
    borderRadius: "5px",
    "& .MuiMenuItem-root": {
        "& .MuiListItemIcon-root": {
            mr: -0.5,
        },
    },
    "& .MuiSvgIcon-root": {
        fontSize: 20,
    },
});

interface CommentPopperMenuProps {
    menuAnchor: HTMLElement | null;
    onMenuClose: () => void;
    handleReport: () => void;
    handleDelete: () => Promise<void>;
    bgcolorSecondary?: boolean;
}

export const CommentPopperMenu: FC<CommentPopperMenuProps> = ({
    menuAnchor,
    onMenuClose,
    handleReport,
    handleDelete,
    bgcolorSecondary,
}) => {
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
                            <PooperMenuList
                                sx={{
                                    backgroundColor: (theme) =>
                                        bgcolorSecondary
                                            ? theme.palette.bgcolor.modal
                                                  .secondary.main
                                            : theme.palette.bgcolor.modal
                                                  .primary.main,
                                    "& .MuiMenuItem-root:hover": {
                                        backgroundColor: (theme) =>
                                            bgcolorSecondary
                                                ? theme.palette.bgcolor.modal
                                                      .secondary.hover
                                                : theme.palette.bgcolor.modal
                                                      .primary.hover,
                                    },
                                }}
                            >
                                <MenuItem onClick={onClickReport}>
                                    <ListItemIcon>
                                        <ReportIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Пожаловаться на отзыв
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={onClickDelete}>
                                    <ListItemIcon>
                                        <DeleteIcon />
                                    </ListItemIcon>
                                    <ListItemText>Удалить</ListItemText>
                                </MenuItem>
                            </PooperMenuList>
                        </ClickAwayListener>
                    </Box>
                </Grow>
            )}
        </Popper>
    );
};
