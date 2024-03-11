import { useMediaQuery, useTheme } from "@mui/material";

export const useTabletDevice = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down("md"));
};
