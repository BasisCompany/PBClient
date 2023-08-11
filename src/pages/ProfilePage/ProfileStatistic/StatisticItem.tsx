import { FC } from "react";
import { Box, Typography } from "@mui/material";
import { statisticListContent } from "./statisticListContent";

export interface StatisticItemProps {
    borderColor: string;
    iconColor: string;
    icon: React.ReactNode;
    value: string;
    unit: string;
}

export const StatisticItem: FC<StatisticItemProps> = ({
    borderColor,
    iconColor,
    icon,
    value,
    unit,
}) => {
    return (
        <Box
            sx={{
                height: { sm: "75px", lg: "80px" },
                //bgcolor: "#861",
                bgcolor: "bgcolor.secondary.main",
                borderRadius: "15px",
                display: "flex",
                flexDirection: { xs: "column", lg: "row" },
                alignItems: "center",
                p: "10px",
                width: {
                    xs: `${90 / statisticListContent.length}%`,
                    lg: "100%",
                },
            }}
        >
            <Box
                sx={{
                    width: { xs: "35px", lg: "65px" },
                    height: { xs: "35px", lg: "65px" },
                    border: { xs: "none", lg: `5px solid ${borderColor} ` },
                    borderRadius: "15px",
                    mr: { xs: "0px", lg: "10px" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: `${iconColor}`,
                }}
            >
                {icon}
            </Box>
            <Box
                sx={{
                    height: "100%",
                    //bgcolor: "#161",
                    width: "calc(100% - 75px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: { xs: "center", lg: "flex-start" },
                }}
            >
                <Box>
                    <Typography
                        component="span"
                        variant="h6"
                        color="text.primary"
                        sx={{
                            fontSize: { xs: 17, sm: 22, lg: 24 },
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        {value}
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                    <Typography
                        color="text.secondary"
                        sx={{
                            fontSize: 17,
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            cursor: "default",
                        }}
                    >
                        {unit}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};
