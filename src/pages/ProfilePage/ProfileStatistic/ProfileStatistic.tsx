import { Box } from "@mui/material";
import { StatisticItem } from "./StatisticItem";
import { statisticListContent } from "./statisticListContent";

export const ProfileStatistic = () => {
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
            {statisticListContent.map(({ id, ...item }) => (
                <StatisticItem key={id} {...item} />
            ))}
        </Box>
    );
};
