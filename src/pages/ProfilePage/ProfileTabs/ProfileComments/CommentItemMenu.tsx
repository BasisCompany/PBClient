import { FC } from "react";
import {
    Popper,
    Grow,
    ClickAwayListener,
    MenuList,
    MenuItem,
    ListItemIcon,
    styled,
    ListItemText,
    Box,
    Theme,
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

const StyledMenuList = styled(MenuList)(({ theme }) => ({}));

interface CommentItemMenuProps {
    menuAnchor: HTMLElement | null;
    onMenuClose: () => void;
    bgcolorSecondary?: boolean;
}

export const CommentItemMenu: FC<CommentItemMenuProps> = ({
    menuAnchor,
    onMenuClose,
    bgcolorSecondary,
}) => {
    const open = Boolean(menuAnchor);

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
                                            ? theme.palette.bgcolor.tertiary
                                                  .main
                                            : theme.palette.bgcolor.modal
                                                  .primary.main,
                                    "& .MuiMenuItem-root:hover": {
                                        backgroundColor: (theme) =>
                                            bgcolorSecondary
                                                ? theme.palette.bgcolor.tertiary
                                                      .hover
                                                : theme.palette.bgcolor.modal
                                                      .primary.hover,
                                    },
                                }}
                            >
                                <MenuItem onClick={onMenuClose}>
                                    <ListItemIcon>
                                        <ReportIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Пожаловаться на отзыв
                                    </ListItemText>
                                </MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Box>
                </Grow>
            )}
        </Popper>
    );
};
