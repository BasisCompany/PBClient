import { FC } from "react";
import { Box } from "@mui/material";

export interface ContentMainLineItemProps {
    boxModel: (title: string) => void;
    title: string;
    color: string;
    model: Array<string>;
    count: number;
    totalCount: number;
    border: string;
}

export const ContentMainLineItem: FC<ContentMainLineItemProps> = ({
    boxModel,
    title,
    color,
    model,
    count,
    totalCount,
    border,
}) => {
    return (
        <Box
            onClick={() => boxModel(title)}
            sx={{
                transition: "all 0.2s ease-in",
                bgcolor: model.includes(title)
                    ? `rgba(${color}, 1)`
                    : `rgba(${color}, 0.5)`,

                width: `${(count / totalCount) * 100}%`,
                borderRadius: `${border}`,
                height: "100%",
                "&:hover": {
                    cursor: "pointer",
                },
            }}
        ></Box>
    );
};
