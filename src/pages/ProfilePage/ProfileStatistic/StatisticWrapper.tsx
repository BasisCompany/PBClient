import { Box } from "@mui/material";
import { statisticListContent } from "./statisticListContent";

export interface StatisticWrapperProps {
    children: React.ReactNode;
}

export const StatisticWrapper: React.FC<StatisticWrapperProps> = ({
    children,
}) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: { xs: "100%", lg: "20%" },
                height: {
                    sm: "75px",
                    lg: `${statisticListContent.length * 80 + 40}px`,
                },
                display: "flex",
                flexDirection: { md: "row", lg: "column" },
                borderRadius: "15px",
                alignItems: "center",
                justifyContent: "space-between",
                mr: { xs: "0px", lg: "15px" },
            }}
        >
            {children}
        </Box>
    );
};
