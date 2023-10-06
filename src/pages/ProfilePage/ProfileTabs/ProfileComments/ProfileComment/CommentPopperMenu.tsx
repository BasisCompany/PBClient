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
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface CommentPopperMenuProps {
    menuAnchor: HTMLElement | null;
    onMenuClose: () => void;
    onReportOpen: () => void;
    handleDelete: () => Promise<void>;
    bgcolorSecondary?: boolean;
}

export const CommentPopperMenu: FC<CommentPopperMenuProps> = ({
    menuAnchor,
    onMenuClose,
    onReportOpen,
    handleDelete,
    bgcolorSecondary,
}) => {
    const open = Boolean(menuAnchor);

    const handleOpenReport = () => {
        onReportOpen();
        onMenuClose();
    };

    const handleDeleteFunc = async () => {
        onMenuClose();
        await handleDelete();
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
                            <MenuList
                                sx={{
                                    borderRadius: "5px",
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
                                    "& .MuiMenuItem-root": {
                                        "& .MuiListItemIcon-root": {
                                            mr: -0.5,
                                        },
                                    },
                                    "& .MuiSvgIcon-root": {
                                        fontSize: 20,
                                    },
                                }}
                            >
                                <MenuItem onClick={handleOpenReport}>
                                    <ListItemIcon>
                                        <ReportIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Пожаловаться на отзыв
                                    </ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleOpenReport}>
                                    <ListItemIcon>
                                        <EditIcon />
                                    </ListItemIcon>
                                    <ListItemText>Редактировать</ListItemText>
                                </MenuItem>
                                <MenuItem onClick={handleDeleteFunc}>
                                    <ListItemIcon>
                                        <DeleteIcon />
                                    </ListItemIcon>
                                    <ListItemText>Удалить</ListItemText>
                                </MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Box>
                </Grow>
            )}
        </Popper>
    );
};
