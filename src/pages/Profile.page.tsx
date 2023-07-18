import {
    Badge,
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from "@mui/material";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import RemoveRedEyeRoundedIcon from "@mui/icons-material/RemoveRedEyeRounded";
import { PromptCard } from "../UI/PromptCard";

export const ProfilePage = () => {
    return (
        <Box
            sx={{
                background: "theme.palette.background.default",
                position: "relative",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="xl">
                <Card
                    sx={{
                        maxWidth: "100%",
                        height: "100%",
                        borderRadius: "15px",
                        bgcolor: "background.default",
                    }}
                >
                    <CardMedia
                        component="img"
                        height="240px"
                        image="https://i.pinimg.com/originals/6c/96/c6/6c96c690466375fa46748ef01fa153d4.jpg"
                        alt="Paella dish"
                    />
                    <CardContent
                        sx={{
                            position: "relative",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                top: "-200px",
                                left: "50px",
                                display: "flex",
                            }}
                        >
                            <Card
                                sx={{
                                    maxWidth: "300px",
                                    height: "610px",
                                    borderRadius: "15px",
                                    bgcolor: "primary.dark",
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "relative",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="350px"
                                        image="https://fanibani.ru/images/wp-content/uploads/2021/02/image190-33.jpg"
                                        alt="Paella dish"
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            padding: "3px",
                                            top: "9px",
                                            borderRadius: "0px 10px 10px 0px",
                                            left: "23%",
                                            transform: "translateX(-50%)",
                                            cursor: "default",
                                            bgcolor: "secondary.main",
                                            display: "flex",
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontSize: 13,
                                                marginTop: "2px",
                                                cursor: "default",
                                            }}
                                        >
                                            {"Midjourney"}
                                        </Typography>
                                    </Box>
                                </Box>

                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        color="text.primary"
                                        sx={{
                                            marginBottom: "4px",
                                            fontSize: 17,
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            cursor: "default",
                                        }}
                                    >
                                        About
                                    </Typography>
                                    <Typography
                                        color="text.secondary"
                                        sx={{
                                            margin: 0,
                                            fontSize: 14,
                                            visibility: "visible",
                                            maxHeight: "150px",
                                            WebkitLineClamp: "7",
                                            display: "-webkit-box",
                                            WebkitBoxOrient: "vertical",
                                            textOverflow: "ellipsis",
                                            overflow: "hidden",
                                            cursor: "default",
                                        }}
                                    >
                                        This impressive paella is a perfect
                                        party dish and a fun meal to cook
                                        together with your guests. Add 1 cup of
                                        frozen peas along with the mussels, if
                                        you like.This impressive paella is a
                                        perfect party dish and a fun meal to
                                        cook together with your guests. Add 1
                                        cup of frozen peas along with the
                                        mussels, if you like.
                                    </Typography>
                                    <Box
                                        sx={{
                                            marginTop: "26px",
                                            cursor: "default",
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                cursor: "default",
                                                width: "97px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                paddingTop: "2px",
                                            }}
                                        >
                                            <Badge
                                                badgeContent={700}
                                                color="secondary"
                                                max={999}
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        fontSize: "0.55rem",
                                                        padding: 0,
                                                    },
                                                }}
                                            >
                                                <RemoveRedEyeRoundedIcon
                                                    sx={{
                                                        fontSize: 19,
                                                    }}
                                                />
                                            </Badge>
                                            <Badge
                                                badgeContent={145}
                                                color="secondary"
                                                max={999}
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        fontSize: "0.55rem",
                                                        padding: 0,
                                                    },
                                                }}
                                            >
                                                <LocalOfferRoundedIcon
                                                    sx={{
                                                        fontSize: 19,
                                                    }}
                                                />
                                            </Badge>
                                            <Badge
                                                badgeContent={4.3}
                                                color="secondary"
                                                sx={{
                                                    "& .MuiBadge-badge": {
                                                        fontSize: "0.55rem",
                                                        padding: 0,
                                                    },
                                                }}
                                            >
                                                <GradeRoundedIcon
                                                    sx={{
                                                        fontSize: 19,
                                                    }}
                                                />
                                            </Badge>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>

                            <Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontSize: 13,
                                        marginTop: "2px",
                                        cursor: "default",
                                    }}
                                >
                                    {"Midjourney"}
                                </Typography>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                            }}
                        >
                            <Box
                                sx={{
                                    minWidth: "340px",
                                    height: "240px",
                                }}
                            ></Box>
                            <Box>
                                <Grid
                                    container
                                    gap={5}
                                    sx={{
                                        justifyContent: "center",
                                    }}
                                >
                                    {[...new Array<number>(20)].map(
                                        (el: any) => (
                                            <Grid key={el}>
                                                <PromptCard />
                                            </Grid>
                                        )
                                    )}
                                </Grid>
                            </Box>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </Box>
    );
};
