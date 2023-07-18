import { useState, MouseEvent } from "react";
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
    OutlinedInput,
    Typography,
    styled,
} from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";
import LockResetRoundedIcon from "@mui/icons-material/LockResetRounded";

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

const ChangePasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <Card
            sx={{
                width: "350px",
                height: "500px",
                borderRadius: "15px",
                bgcolor: "primary.dark",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
                }}
            >
                <CardHeader
                    sx={{
                        height: "40px",
                        paddingLeft: "5px",
                        marginTop: "7px",
                    }}
                    action={
                        <LockResetRoundedIcon
                            sx={{
                                color: "#00FF00",
                                fontSize: 70,
                            }}
                        />
                    }
                />
            </Box>

            <CardContent sx={{}}>
                <Typography
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
                    Смена пароля
                </Typography>
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
                    Пожалуйста, заполните поля ниже.
                </Typography>
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
                                        onMouseDown={handleMouseDownPassword}
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
                                Ваша почта
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
                                        width: "150px",
                                    }}
                                >
                                    Повторите пароль
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
                                        onMouseDown={handleMouseDownPassword}
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
                                Ваша почта
                            </Typography>
                        </FormHelperText>
                    </FormControl>
                </Box>
                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ColorButton variant="outlined">Восстановить</ColorButton>
                </Box>
            </CardContent>
        </Card>
    );
};

ChangePasswordForm.propTypes = {};

export default ChangePasswordForm;
