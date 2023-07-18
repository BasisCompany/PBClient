import { useMediaQuery, useTheme } from "@mui/material";

export const useMobileDevice = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("sm"));
};
