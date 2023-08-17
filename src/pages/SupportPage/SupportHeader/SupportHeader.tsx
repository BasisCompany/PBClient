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
    Container,
} from "@mui/material";
import { useMobileDevice } from "../../../hooks/useMobileDevice";

interface SearchInputProps extends BoxProps {
    isOpen: boolean;
}

const SearchInput = styled(({ ...props }: SearchInputProps) => (
    <Box {...props} />
))(({ theme, isOpen }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: "flex",
    marginLeft: 0,
    width: "100%",
    height: "60px",
    color: theme.palette.text.primary,
    zIndex: isOpen ? 1300 : 1,
    [theme.breakpoints.up("xs")]: {
        width: isOpen ? "100%" : "100%",
    },
    [theme.breakpoints.up("md")]: {
        width: isOpen ? "550px" : "550px",
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

    const handleSearchClose = () => {
        setPopperAnchor(null);
    };

    const searchOpen = Boolean(popperAnchor);

    const id = searchOpen ? "simple-popover" : undefined;

    const isMobile = useMobileDevice();
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
                    variant="h1"
                    color="text.primary"
                    sx={{
                        fontSize: { xs: "44px", md: "52px" },
                        textAlign: "center",
                        cursor: "default",
                    }}
                >
                    Привет! Чем тебе помочь?
                </Typography>
            </Box>
            <Box
                sx={{
                    //p: "15px",
                    //bgcolor: "#62A",
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
                    <Popper
                        id={id}
                        open={searchOpen}
                        anchorEl={popperAnchor}
                        onClick={isMobile ? handleSearchClose : undefined}
                        placement="bottom"
                        sx={{
                            zIndex: 1250,
                            backgroundColor: "primary.main",
                            borderRadius: "5px",
                            maxWidth: "550px",
                            width: isMobile ? "100%" : "100%",
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
                        <Container
                            maxWidth="md"
                            sx={{
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
                                Что вас заинтересовало?
                            </Typography>
                        </Container>
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
            </Box>
        </Box>
    );
};
