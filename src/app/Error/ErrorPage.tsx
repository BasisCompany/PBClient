import { Box, Typography } from "@mui/material";
import { ErrorPageStatic } from "./ErrorPageStatic";

export interface ErrorPageProps {
    status: string;
    description: string;
}

export const ErrorPage: React.FC<ErrorPageProps> = ({
    status,
    description,
}) => {
    return (
        <ErrorPageStatic>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: { xs: "45vw", md: "45vh" },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontSize: { xs: "45vw", md: "45vh" },
                        overflow: "hidden",
                        cursor: "default",
                    }}
                >
                    {status}
                </Typography>
            </Box>
            <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                    fontSize: { xs: "3vw", md: "3vh" },
                    cursor: "default",
                }}
            >
                {description}
            </Typography>
        </ErrorPageStatic>
    );
};
