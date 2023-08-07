import { useState, MouseEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
    styled,
    alpha,
    InputBase,
    Box,
    BoxProps,
    Backdrop,
    Typography,
    Popper,
} from "@mui/material";

interface SearchInputProps extends BoxProps {
    isOpen: boolean;
}

const SearchInput = styled(({ isOpen: _, ...props }: SearchInputProps) => (
    <Box {...props} />
))(({ theme, isOpen }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: isOpen ? "700px" : "280px",
        zIndex: isOpen ? 1300 : 1,
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
    },
}));

export const NavBarSearch = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const handleSearchOpen = (event: MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleSearchClose = () => {
        setAnchorEl(null);
    };

    const searchOpen = Boolean(anchorEl);
    const id = searchOpen ? "simple-popover" : undefined;

    return (
        <Box
            sx={{
                width: "100%",
                ...(searchOpen && {
                    display: "flex",
                    justifyContent: "center",
                }),
            }}
        >
            <SearchInput isOpen={searchOpen} onClick={handleSearchOpen}>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    autoFocus
                    placeholder="Поиск"
                    inputProps={{ "aria-label": "search" }}
                />
            </SearchInput>
            <Popper
                id={id}
                open={searchOpen}
                anchorEl={anchorEl}
                placement="bottom"
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
                        width: "700px",
                        height: "50px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        sx={{
                            color: "text.primary",
                        }}
                    >
                        Что будем искать?
                    </Typography>
                </Box>
            </Popper>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: 1200,
                }}
                open={searchOpen}
                onClick={handleSearchClose}
            />
        </Box>
    );
};
