import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import {
    Dispatch,
    FC,
    SetStateAction,
    useRef,
    useState,
    MouseEvent,
} from "react";

const CssTextField = styled(TextField)(({ theme }) => ({
    height: "82px",
    "& label.Mui-focused": {
        color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: theme.palette.text.secondary,
        },
        "&:hover fieldset": {
            borderColor: theme.palette.text.primary,
        },
        "&.Mui-focused fieldset": {
            borderColor: theme.palette.text.primary,
        },
    },
}));

const ColorButton = styled(Button)(({ theme }) => ({
    fontSize: 15,
    width: "100%",
    minHeight: "50px",
    borderRadius: "15px",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
    },
}));

interface RegisterFormProps {
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

export const RegisterForm: FC<RegisterFormProps> = ({ setShowLogin }) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowLogin = () => setShowLogin((show) => !show);
    const captchaRef = useRef(null);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Card
            sx={{
                width: { xs: "100%", sm: "100%", md: "350px" },
                height: "830px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    height: "40px",
                    justifyContent: "flex-start",
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                    }}
                    action={
                        <IconButton
                            aria-label="back"
                            onClick={handleClickShowLogin}
                        >
                            <KeyboardBackspaceRoundedIcon
                                sx={{
                                    fontSize: 25,
                                }}
                            />
                        </IconButton>
                    }
                />
            </Box>

            <CardContent>
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: { xs: "none", sm: "none", md: "flex" },
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component={"span"}
                            variant="h6"
                            color="text.primary"
                            sx={{
                                marginBottom: "4px",
                                fontSize: 30,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            Создайте аккаунт
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: "flex", sm: "flex", md: "none" },
                            justifyContent: "center",
                        }}
                    >
                        <Typography
                            component={"span"}
                            variant="h6"
                            color="text.primary"
                            sx={{
                                marginBottom: "4px",
                                fontSize: 30,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            Регистрация
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                        }}
                    >
                        <Typography
                            color="text.secondary"
                            sx={{
                                margin: 0,
                                fontSize: 14,
                                visibility: "visible",
                                maxHeight: "150px",
                                WebkitLineClamp: "2",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                                width: "100%",
                            }}
                        >
                            Для регистрации заполните поля ниже.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{}}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CssTextField
                            fullWidth
                            helperText={
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Ваше имя
                                </Typography>
                            }
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <PersonOutlineRoundedIcon
                                        sx={{
                                            fontSize: 23,
                                            color: "action.active",
                                            marginRight: "2px",
                                            marginBottom: "4px",
                                        }}
                                    />
                                    Никнейм
                                </Box>
                            }
                            id="custom-css-outlined-input"
                            margin="normal"
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <CssTextField
                            fullWidth
                            helperText={
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Ваша почта
                                </Typography>
                            }
                            label={
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <MailOutlineRoundedIcon
                                        sx={{
                                            fontSize: 20,
                                            color: "action.active",
                                            marginRight: "5px",
                                            marginBottom: "3px",
                                        }}
                                    />
                                    Email
                                </Box>
                            }
                            id="custom-css-outlined-input"
                            margin="normal"
                        />
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <FormControl
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#FFF",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "#FFF",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#d1d1dc",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#FFF",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#FFF",
                                    },
                                },
                            }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <LockOpenRoundedIcon
                                        sx={{
                                            fontSize: 20,
                                            color: "action.active",
                                            marginRight: "4px",
                                            marginBottom: "4px",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            backgroundColor: "primary.dark",
                                            width: "65px",
                                        }}
                                    >
                                        Пароль
                                    </Typography>
                                </Box>
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <FormHelperText id="my-helper-text">
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Ваш пароль
                                </Typography>
                            </FormHelperText>
                        </FormControl>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <FormControl
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            sx={{
                                "& label.Mui-focused": {
                                    color: "#FFF",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "#FFF",
                                },
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                        borderColor: "#d1d1dc",
                                    },
                                    "&:hover fieldset": {
                                        borderColor: "#FFF",
                                    },
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#FFF",
                                    },
                                },
                            }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <LockOpenRoundedIcon
                                        sx={{
                                            fontSize: 20,
                                            color: "action.active",
                                            marginRight: "4px",
                                            marginBottom: "4px",
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            backgroundColor: "primary.dark",
                                            width: "130px",
                                        }}
                                    >
                                        Подтверждение
                                    </Typography>
                                </Box>
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={
                                                handleMouseDownPassword
                                            }
                                            edge="end"
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <FormHelperText id="my-helper-text">
                                <Typography
                                    sx={{
                                        marginLeft: "-14px",
                                        fontSize: "15px",
                                    }}
                                >
                                    Повтор пароля
                                </Typography>
                            </FormHelperText>
                        </FormControl>
                    </Box>
                </Box>
                <Box
                    sx={{
                        border: "1px solid #fff",
                        height: "80px",
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    {/* <ReCAPTCHA sitekey=" " ref={captchaRef} /> */}
                </Box>
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <ColorButton variant="outlined">
                        Зарегистрироваться
                    </ColorButton>
                </Box>

                <Box
                    sx={{
                        marginTop: "50px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        color="text.secondary"
                        sx={{
                            marginRight: "5px",
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "150px",
                            WebkitLineClamp: "2",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Уже есть аккаунт?
                    </Typography>
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={handleClickShowLogin}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Войдите"}
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};
