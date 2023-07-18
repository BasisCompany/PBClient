import WarningAmberRoundedIcon from "@mui/icons-material/WarningAmberRounded";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography,
    styled,
} from "@mui/material";

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

export const ExpiredForm = () => {
    return (
        <Card
            sx={{
                margin: "auto",
                maxWidth: "350px",
                height: "300px",
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
                    }}
                    action={
                        <WarningAmberRoundedIcon
                            sx={{
                                color: "#FF0000",
                                fontSize: 70,
                            }}
                        />
                    }
                />
            </Box>

            <CardContent sx={{}}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        textAlign: "center",
                    }}
                >
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
                        Ссылка истекла
                    </Typography>

                    <Typography
                        color="text.secondary"
                        sx={{
                            margin: 0,
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
                        Пожалуйста, залогиньтесь снова, чтобы получить новое
                        письмо подтверждения.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        marginTop: "30px",
                        display: "flex",
                        justifyContent: "end",
                    }}
                >
                    <ColorButton variant="outlined">
                        Войти в аккаунт
                    </ColorButton>
                </Box>
            </CardContent>
        </Card>
    );
};
