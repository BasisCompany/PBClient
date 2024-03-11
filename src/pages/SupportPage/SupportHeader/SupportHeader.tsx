import { useState, MouseEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
    styled,
    alpha,
    InputBase,
    Box,
    BoxProps,
    Typography,
} from "@mui/material";

interface SearchInputProps extends BoxProps {
    isOpen: boolean;
}

const SearchInput = styled(({ ...props }: SearchInputProps) => (
    <Box {...props} />
))(({ theme }) => ({
    position: "relative",
    borderRadius: "15px",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    transition: "all 0.1s ease-out",
    "&:hover": {
        transition: "all 0.1s ease-in",
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: "flex",
    marginLeft: 0,
    width: "100%",
    height: "60px",
    color: theme.palette.text.primary,
    zIndex: 1,
    [theme.breakpoints.up("xs")]: {
        height: "55px",
        width: "100%",
    },
    [theme.breakpoints.up("sm")]: {
        width: "550px",
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

export const SupportHeader = () => {
    const [popperAnchor, setPopperAnchor] = useState<HTMLDivElement | null>(
        null
    );

    const handleSearchOpen = (event: MouseEvent<HTMLDivElement>) => {
        setPopperAnchor(event.currentTarget);
    };

    const searchOpen = Boolean(popperAnchor);

    return (
        <Box
            sx={{
                //bgcolor: "#712",
                height: { xs: "none", md: "250px" },
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                borderRadius: "15px",
                mb: "15px",
            }}
        >
            <Box
                sx={{
                    //p: "15px",
                    //bgcolor: "#563",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    flexDirection: "column",
                    mb: "20px",
                }}
            >
                <Typography
                    variant="title"
                    color="text.primary"
                    sx={{
                        fontSize: { xs: "24px", sm: "38px", md: "52px" },
                        fontWeight: { xs: "500", sm: "400", md: "300" },
                        textAlign: "center",
                        mb: "4px",
                        cursor: "default",
                    }}
                >
                    Привет!
                </Typography>
                <Typography
                    variant="title"
                    color="text.primary"
                    sx={{
                        fontSize: { xs: "24px", sm: "38px", md: "52px" },
                        fontWeight: { xs: "500", sm: "400", md: "300" },
                        textAlign: "center",
                        cursor: "default",
                    }}
                >
                    Чем тебе помочь?
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <SearchInput isOpen={searchOpen} onClick={handleSearchOpen}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Введите ваш вопрос"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </SearchInput>
                </Box>
            </Box>
        </Box>
    );
};
