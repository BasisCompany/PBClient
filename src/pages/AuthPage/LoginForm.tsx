import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    FormHelperText,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    SvgIcon,
    TextField,
    Typography,
    styled,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useState, MouseEvent } from "react";
import { Controller, useForm, useFormState } from "react-hook-form";

const CssTextField = styled(TextField)(({ theme }) => ({
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

interface FormValues {
    login: string;
    password: string;
}

interface LoginFormProps {
    setShowLogin: Dispatch<SetStateAction<boolean>>;
}

export const LoginForm: FC<LoginFormProps> = ({ setShowLogin }) => {
    const { handleSubmit, control } = useForm<FormValues>({
        defaultValues: {
            login: "",
            password: "",
        },
    });

    const { errors } = useFormState({
        control,
    });

    const onSubmit = (data: any) => console.log(data);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowRegister = () => setShowLogin((show) => !show);

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
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        height: "135px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SvgIcon
                        viewBox="0 0 580 256"
                        sx={{
                            width: "7em",
                            height: "7em",
                        }}
                    >
                        <path
                            d="M90.964 3.735C78.832 6.589 67.414 11.279 55.69 18.21c-11.418 6.83-29.768 25.18-37.21 37.413-9.48 15.394-15.7 33.54-17.024 49.647-.612 7.544-.612 8.054 1.325 8.054 1.733 0 2.14-1.122 3.16-8.971 6.423-48.016 39.249-84.41 86.653-96.236 11.723-2.956 35.272-3.16 48.015-.51 24.875 5.302 44.142 16.006 61.269 33.948 11.621 12.233 19.573 25.282 24.874 41.186 2.956 9.073 5.709 21.918 5.709 27.015 0 2.854.408 3.568 2.039 3.568 1.733 0 2.039-.714 2.039-4.486 0-6.116-2.549-19.267-5.505-27.83-12.845-37.618-43.53-66.06-82.88-76.459-8.564-2.242-12.54-2.65-28.341-2.956-16.617-.306-19.37-.102-28.85 2.14z"
                            fill="#FFF"
                            stroke="#FFF"
                            strokeWidth=".10194"
                        />
                        <path
                            d="M95.347 15.458c-39.35 8.564-69.22 37.312-80.23 77.274-1.835 6.728-2.243 10.602-2.243 26.71 0 17.636.204 19.47 2.753 28.034 5.709 18.656 13.762 32.724 26.505 46.079 19.268 20.083 42.41 30.583 70.24 31.704 21.102.816 37.515-2.65 54.846-11.621 34.05-17.535 55.56-51.176 57.802-90.22 2.753-48.934-30.175-93.585-78.7-106.43-14.273-3.772-37.516-4.486-50.973-1.53zm27.015 26.404c12.336 3.874 24.161 12.54 30.584 22.53 6.014 9.48 6.218 11.825 5.912 58.72l-.305 42.714-3.365 6.932c-6.218 12.641-19.063 22.938-33.335 26.71-8.564 2.14-23.855 1.937-33.336-.408-8.258-2.141-17.738-6.525-25.282-11.622-23.957-16.413-38.23-48.016-34.661-76.968 4.383-35.476 27.932-62.593 60.758-69.933 9.073-2.04 24.06-1.428 33.03 1.325zM269.162 81.62v32.724h10.194V87.84h9.99c11.317 0 16.414-1.733 20.9-7.034 3.465-4.18 4.077-6.83 3.567-14.374-.51-7.34-2.65-10.603-9.073-14.273-4.18-2.344-5.709-2.548-19.98-2.854l-15.598-.408V81.62zm31.297-20.694c2.344 1.733 2.956 3.058 3.16 7.136.204 4.383-.102 5.403-2.345 7.543-2.446 2.243-3.772 2.55-12.335 2.855l-9.583.408V58.07l9.073.408c7.34.204 9.685.713 12.03 2.447zM541.047 49.814c-.408.305-.714 4.281-.714 8.665v7.952h-9.175v9.174h9.175v9.583c0 17.33 2.447 24.161 10.195 28.137 4.689 2.345 12.845 2.65 17.636.611 4.485-1.835 9.685-7.951 10.5-12.335.306-2.039.408-3.874.102-4.18-.306-.305-2.447-.815-4.69-1.12-3.771-.51-4.179-.409-4.179 1.63 0 3.67-5.301 8.258-9.685 8.258-7.544 0-10.092-5.913-9.48-21.918l.305-8.156 9.481-.306 9.379-.305V66.43h-19.369V49.1h-4.384c-2.447 0-4.791.306-5.097.714zM348.474 66.43c-1.529.408-4.18 1.836-5.912 3.059l-3.059 2.14v-5.3l-9.888.305-9.99.306-.307 4.282-.305 4.383h10.296v29.462l-4.791.306-4.894.306-.306 4.282-.305 4.383H349.698v-9.175H339.299l.408-8.97c.408-10.093 2.447-15.292 7.136-18.759 3.16-2.242 9.175-2.854 14.578-1.427 2.855.714 3.16.51 4.384-2.854.713-2.04 1.121-4.078.713-4.69-1.529-2.548-12.437-3.772-18.044-2.038zM389.966 66.329c-13.253 3.466-20.797 16.107-17.84 30.073 2.446 11.928 11.621 18.962 24.466 18.962 14.068-.102 23.141-8.258 24.16-21.918.918-11.52-3.67-20.797-12.538-24.875-5.301-2.548-13.457-3.568-18.248-2.242zm14.782 11.111c8.155 5.913 8.053 21.51-.204 26.71-5.098 3.262-13.967 2.446-18.146-1.53-7.748-7.441-5.913-21.815 3.364-26.097 4.995-2.345 11.01-1.937 14.986.917zM439 66.125c-.407.407-3.67.611-7.34.51l-6.524-.306v48.016h10.195v-16.21c0-16.31.917-21.918 3.772-22.937 3.874-1.53 4.383.917 4.383 20.389v18.757h9.889l.51-17.126c.305-9.38.917-17.84 1.325-18.86.408-1.02 1.733-2.345 2.854-2.956 4.078-2.141 4.792.917 4.792 20.796v18.146h10.194l-.102-18.656c0-20.388-.815-24.262-5.301-27.626-3.67-2.753-10.908-2.855-13.66-.408-1.835 1.733-2.141 1.733-5.913-.204-4.078-2.039-7.748-2.65-9.073-1.325zM494.968 66.94c-2.447.918-4.18 1.122-4.384.51-.203-.612-2.65-1.02-5.403-1.02h-4.995l.204 32.827.306 32.927 4.893.306 4.792.306v-9.888c0-9.685 0-9.787 2.344-9.073 4.18 1.427 13.253 1.733 17.025.611 5.505-1.63 11.825-7.544 13.966-13.15 5.403-14.17-1.427-30.482-14.374-34.356-6.218-1.835-9.073-1.835-14.374 0zm14.476 10.297c5.301 3.364 7.544 14.374 4.486 21.51-2.855 6.932-13.253 9.684-20.185 5.403l-3.364-2.039v-11.01c0-9.583.305-11.316 1.936-12.845 4.18-3.772 12.234-4.282 17.127-1.02z"
                            fill="#FFF"
                            stroke="#FFF"
                            strokeWidth=".10194"
                        />
                        <path
                            d="M1.049 131.573c0 16.515 9.888 42.409 22.631 59.331 21.307 28.34 52.706 44.958 87.672 46.487 22.326 1.02 40.778-2.753 59.434-11.928 33.336-16.515 55.457-45.467 63.205-82.37 2.141-10.399 2.039-15.496-.306-15.496-1.529 0-2.039 1.427-3.058 8.767-6.83 46.996-42.205 84.614-88.895 94.4-11.418 2.447-35.579 2.957-45.365.918-34.152-6.932-63.104-28.952-79.007-59.841-5.301-10.297-9.787-24.263-11.418-35.477-1.02-7.238-1.529-8.767-3.058-8.767-1.427 0-1.835.816-1.835 3.976zM269.162 178.467v32.724h14.068c15.496 0 20.083-.917 24.67-4.791 4.486-3.772 6.117-7.544 6.117-14.272 0-6.423-2.344-11.52-6.116-13.559-2.243-1.223-2.243-1.223-.204-3.364 3.262-3.568 4.281-6.423 4.281-11.418 0-6.83-2.446-11.316-8.053-14.578-4.384-2.548-5.505-2.752-19.675-3.16l-15.088-.306v32.724zm25.282-22.733c6.015 1.223 8.87 6.422 6.728 12.13-1.223 2.957-6.116 4.588-14.17 4.588h-7.646v-17.33h6.015c3.262 0 7.34.306 9.073.612zm3.772 27.32c1.835.816 3.874 2.345 4.485 3.467 1.937 3.67 1.326 9.073-1.325 12.131-2.345 2.65-2.956 2.854-12.233 3.16l-9.787.408v-20.593h7.646c4.384 0 9.175.612 11.214 1.428zM322.173 181.322c0 16.922.204 18.553 2.345 22.733 2.956 5.709 7.441 8.156 15.291 8.156 6.219 0 8.87-.918 12.743-4.384l2.243-2.039v2.65c0 2.651.204 2.753 5.097 2.753h5.097v-47.914h-10.194v12.438c0 14.883-1.121 19.47-5.607 23.956-2.854 2.855-4.078 3.365-7.952 3.365-2.854 0-5.3-.612-6.218-1.631-.918-.816-1.733-1.632-1.835-1.734-.102-.101-.408-8.257-.714-18.044l-.612-17.84-4.79-.306-4.894-.306v18.147zM370.8 163.991c-.306.408 4.078 11.214 9.583 23.957l10.092 23.141-1.937 4.486c-1.121 2.446-2.65 4.791-3.466 5.097-1.529.612-7.747-.51-9.684-1.733-1.02-.612-3.263 5.097-3.263 8.257 0 1.733 9.583 3.67 14.375 2.855 7.441-1.224 8.97-3.67 22.835-35.885 7.034-16.31 12.743-29.971 12.743-30.379 0-.306-2.65-.51-5.81-.306l-5.812.306-6.32 15.7c-3.466 8.665-6.728 16.413-7.238 17.33-.714 1.02-2.855-3.058-8.054-15.801l-7.238-17.229-5.199-.306c-2.752-.204-5.301.102-5.607.51zM33.671 251.867c-4.69.713 60.147 2.65 86.143 2.65 28.034 0 88.691-1.937 84.104-2.65-5.607-.918-163.825-.918-170.247 0z"
                            fill="#FFF"
                            stroke="text.primary"
                            strokeWidth=".10194"
                        />
                    </SvgIcon>
                </Box>
            </Box>
            <CardContent sx={{}}>
                <Box sx={{ mb: "65px", mt: "20px" }}>
                    <Box sx={{ textAlign: "center" }}>
                        <Typography
                            component={"span"}
                            variant="h6"
                            color="text.primary"
                            sx={{
                                fontSize: 30,
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                cursor: "default",
                            }}
                        >
                            Вход
                        </Typography>
                    </Box>
                    <Box sx={{ textAlign: "center" }}>
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
                            }}
                        >
                            Пожалуйста, войдите, чтобы продолжить.
                        </Typography>
                    </Box>
                </Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="login"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    if (
                                        !value.match(
                                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                                        )
                                    ) {
                                        return "Email введен некорректно";
                                    }

                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <CssTextField
                                    fullWidth
                                    margin="normal"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.login?.message}
                                    helperText={
                                        <Typography
                                            sx={{
                                                marginLeft: "-14px",
                                                fontSize: "15px",
                                            }}
                                        >
                                            {errors.login?.message
                                                ? errors.login?.message
                                                : "Ваша почта"}
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
                                />
                            )}
                        />
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Controller
                            control={control}
                            name="password"
                            rules={{
                                required: "Обязательно для заполнения",
                                validate: (value) => {
                                    if (value.length < 6) {
                                        return "Пароль должен быть больше 6 символов";
                                    }

                                    return true;
                                },
                            }}
                            render={({ field }) => (
                                <FormControl
                                    margin="normal"
                                    fullWidth
                                    variant="outlined"
                                    onChange={(e) => field.onChange(e)}
                                    value={field.value}
                                    error={!!errors.password?.message}
                                    sx={{
                                        "& label.Mui-focused": {
                                            color: "#FFF",
                                            left: "-3px",
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
                                                    backgroundColor:
                                                        "primary.dark",
                                                    width: "65px",
                                                }}
                                            >
                                                Пароль
                                            </Typography>
                                        </Box>
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
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
                                    <FormHelperText
                                        sx={{
                                            marginLeft: "0px",
                                            fontSize: "15px",
                                        }}
                                    >
                                        {errors.password?.message
                                            ? errors.password?.message
                                            : "Ваш пароль"}
                                    </FormHelperText>
                                </FormControl>
                            )}
                        />
                    </Box>

                    {/* <Box
                    sx={{
                        marginTop: "15px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ReCAPTCHA sitekey=" " ref={captchaRef} />
                </Box> */}
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <ColorButton type="submit" variant="outlined">
                            Войти
                        </ColorButton>
                    </Box>
                </form>
                <Box
                    sx={{
                        marginTop: "10px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Забыли пароль?"}
                    </Link>
                </Box>
                <Box
                    sx={{
                        marginTop: "140px",

                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <Typography
                        color="text.secondary"
                        sx={{
                            display: { xs: "none", md: "-webkit-box" },
                            marginRight: "5px",
                            fontSize: 14,
                            visibility: "visible",
                            maxHeight: "150px",
                            WebkitLineClamp: "2",

                            WebkitBoxOrient: "vertical",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        Нет аккаунта?
                    </Typography>
                    <Link
                        variant="h6"
                        href="#"
                        underline="none"
                        onClick={handleClickShowRegister}
                        sx={{
                            fontSize: 14,
                            color: "text.primary",
                        }}
                    >
                        {"Зарегистрируйтесь"}
                    </Link>
                </Box>
            </CardContent>
        </Card>
    );
};
