import { Box, Grid, Typography } from "@mui/material";
import { supporHelpListContent } from "./supportListContent";

export const SupportContentMainHelp = () => {
    return (
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
            {supporHelpListContent.map(({ id, ...items }) => (
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
                                    theme.palette.bgcolor.secondary.hover,
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
                                variant="text"
                                color="text.primary"
                                sx={{
                                    pr: "10%",
                                    pl: "10%",
                                    fontWeight: 400,
                                    lineHeight: 1.235,
                                    letterSpacing: "0.00735em",
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
                                    variant="text"
                                    color="text.secondary"
                                    sx={{
                                        fontWeight: 300,
                                        lineHeight: 1.167,
                                        letterSpacing: "-0.01562em",
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
    );
};
