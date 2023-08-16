import { useState, MouseEvent, SyntheticEvent } from "react";
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
    Grid,
} from "@mui/material";
import { useMobileDevice } from "../../hooks/useMobileDevice";
import VpnKeyRoundedIcon from "@mui/icons-material/VpnKeyRounded";
import PasswordRoundedIcon from "@mui/icons-material/PasswordRounded";
import { supportListContent } from "./supportListContent";
import { ContentTabs } from "../ProfilePage/ProfileContent/ContentHeader/ContentTabs";
import { ContentTab } from "../ProfilePage/ProfileContent/ContentHeader/ContentTab";
import { contentTabsItems } from "../ProfilePage/ProfileContent/ContentHeader/contentTabsItems";

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

export const SupportPage = () => {
    const isMobile = useMobileDevice();
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

    const [value, setValue] = useState<number>(0);

    const handleChange = (_: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Box
                sx={{
                    //bgcolor: "#764",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <Box
                    sx={{
                        //bgcolor: "#712",
                        height: { xs: "none", md: "200px" },
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
                            mb: "15px",
                        }}
                    >
                        <Typography
                            variant="h1"
                            color="text.primary"
                            sx={{
                                fontSize: { xs: "40px", md: "60px" },
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
                            <SearchInput
                                isOpen={searchOpen}
                                onClick={handleSearchOpen}
                            >
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
                                onClick={
                                    isMobile ? handleSearchClose : undefined
                                }
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
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "15px",
                    }}
                >
                    <ContentTabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        allowScrollButtonsMobile
                    >
                        {contentTabsItems.map(({ id, ...item }) => (
                            <ContentTab key={id} {...item} />
                        ))}
                    </ContentTabs>
                </Box>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    sx={
                        {
                            //bgcolor: "#12F",
                        }
                    }
                >
                    {supportListContent.map(({ id, ...items }) => (
                        <Grid key={id} item xs={12} sm={6} md={4}>
                            <Box
                                sx={{
                                    transition: "all 0.1s ease-out",
                                    height: {
                                        xs: "210px",
                                        sm: "240px",
                                        md: "280px",
                                        lg: "320px",
                                    },
                                    //p: "5%",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    borderRadius: "15px",
                                    "&:hover": {
                                        cursor: "pointer",
                                        bgcolor: (theme) =>
                                            theme.palette.bgcolor.secondary
                                                .hover,
                                        transition: "all 0.1s ease-in",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        //bgcolor: "#A57",
                                        color: `${items.iconColor}`,
                                    }}
                                >
                                    {items.icon}
                                </Box>
                                <Box
                                    sx={{
                                        //height: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        //bgcolor: "#854",
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        color="text.primary"
                                        sx={{
                                            pr: "10%",
                                            pl: "10%",
                                            fontSize: {
                                                xs: "16px",
                                                sm: "15px",
                                                md: "17px",
                                                lg: "19px",
                                            },
                                            textAlign: "center",
                                            cursor: "pointer",
                                            //textDecoration: "underline",
                                        }}
                                    >
                                        {items.title}
                                    </Typography>
                                    <Box
                                        sx={{
                                            pr: "10%",
                                            pl: "10%",
                                            mt: "10px",
                                            //bgcolor: "#235",
                                        }}
                                    >
                                        <Typography
                                            variant="h1"
                                            color="text.secondary"
                                            sx={{
                                                fontSize: {
                                                    xs: "13px",
                                                    sm: "12px",
                                                    md: "14px",
                                                    lg: "16px",
                                                },
                                                textAlign: "center",
                                                cursor: "pointer",
                                            }}
                                        >
                                            {items.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
};
