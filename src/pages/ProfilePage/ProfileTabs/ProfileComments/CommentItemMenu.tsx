import { FC } from "react";
import {
    Popper,
    Grow,
    Paper,
    ClickAwayListener,
    MenuList,
    MenuItem,
    ListItemIcon,
    styled,
    ListItemText,
    Box,
} from "@mui/material";
import ReportIcon from "@mui/icons-material/Report";

const StyledMenuList = styled(MenuList)(({ theme }) => ({
    borderRadius: "5px",
    backgroundColor: theme.palette.bgcolor.modal.primary.main,
    "& .MuiMenuItem-root:hover": {
        backgroundColor: theme.palette.bgcolor.modal.primary.hover,
    },
}));

interface CommentItemMenuProps {
    menuAnchor: HTMLElement | null;
    onMenuClose: () => void;
}

export const CommentItemMenu: FC<CommentItemMenuProps> = ({
    menuAnchor,
    onMenuClose,
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
                            <StyledMenuList>
                                <MenuItem onClick={onMenuClose}>
                                    <ListItemIcon>
                                        <ReportIcon fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Пожаловаться на отзыв
                                    </ListItemText>
                                </MenuItem>
                            </StyledMenuList>
                        </ClickAwayListener>
                    </Box>
                </Grow>
            )}
        </Popper>
    );
};
