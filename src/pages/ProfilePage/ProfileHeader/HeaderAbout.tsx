import { Box, Typography, Chip } from "@mui/material";

import FaceIcon from "@mui/icons-material/Face";
import { FC } from "react";

export interface HeaderAboutProps {
    name: string;
    status: string;
}

export const HeaderAbout: FC<HeaderAboutProps> = ({ name, status }) => {
    return (
        <Box
            sx={{
                mt: { xs: "80px", md: "0%" },
                //bgcolor: "#869",
                width: { xs: "100%", md: "47%" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    //bgcolor: "#690",
                    display: "flex",
                    justifyContent: {
                        xs: "center",
                        md: "start",
                    },
                }}
            >
                <Typography
                    variant="h6"
                    color="text.primary"
                    sx={{
                        fontSize: { sx: 27, md: 37 },
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                        WebkitLineClamp: "1",
                    }}
                >
                    {name}
                </Typography>
            </Box>
            <Box
                sx={{
                    //bgcolor: "#697",
                    mb: { xs: "5px", md: "0" },
                    display: "flex",
                    justifyContent: {
                        xs: "center",
                        md: "start",
                    },
                    height: "33%",
                }}
            >
                <Typography
                    variant="h3"
                    color="text.primary"
                    sx={{
                        fontSize: 16,
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        cursor: "default",
                        WebkitLineClamp: "1",
                    }}
                >
                    {status}
                </Typography>
            </Box>
            <Box
                sx={{
                    //bgcolor: "#620",

                    height: "33%",
                    display: "flex",
                    justifyContent: {
                        xs: "center",
                        md: "start",
                    },
                    alignItems: "center",
                }}
            >
                <Chip
                    icon={<FaceIcon />}
                    label="With Icon"
                    variant="outlined"
                />
                <Chip
                    sx={{ ml: "15px", borderRadius: "none" }}
                    icon={<FaceIcon />}
                    label="With Icon"
                    variant="outlined"
                />
            </Box>
        </Box>
    );
};
