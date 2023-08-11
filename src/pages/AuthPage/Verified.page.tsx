import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { CustomLinkButton } from "../../UI/Buttons/LinkButton";
import { CenterBox } from "../../UI/CenterBox";

export const VerifiedPage = () => {
    return (
        <CenterBox>
            <Card
                sx={{
                    margin: "auto",
                    maxWidth: "350px",
                    height: "280px",
                    borderRadius: "15px",
                    bgcolor: (theme) => theme.palette.bgcolor.secondary.main,
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
                            <MarkEmailReadOutlinedIcon
                                sx={{
                                    color: "#00FF00",
                                    fontSize: 65,
                                }}
                            />
                        }
                    />
                </Box>
                <CardContent>
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
                            Почта подтверждена
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
                            Пожалуйста, войдите в свой аккаунт.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            marginTop: "30px",
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <CustomLinkButton to="/login" variant="outlined">
                            Войти в аккаунт
                        </CustomLinkButton>
                    </Box>
                </CardContent>
            </Card>
        </CenterBox>
    );
};
