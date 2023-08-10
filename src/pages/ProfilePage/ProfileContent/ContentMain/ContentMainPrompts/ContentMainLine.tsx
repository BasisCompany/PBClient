import { Box } from "@mui/material";
import { FC } from "react";
import { contentMainLineListContent } from "./ContentMainLineListContent";
import { ContentMainLineItem } from "./ContentMainLineItem";

declare global {
    interface Array<T> {
        toSplicedCustom(index: number, count: number): T[];
    }
}

Array.prototype.toSplicedCustom = function <T>(
    index: number,
    count: number
): T[] {
    const newArray = [...(this as T[])];
    newArray.splice(index, count);
    return newArray;
};

interface ContentMainLineProps {
    model: Array<string>;
    boxModel: (title: string) => void;
}

export const ContentMainLine: FC<ContentMainLineProps> = ({
    model,
    boxModel,
}) => {
    const totalCount = contentMainLineListContent.reduce(
        (accumulator, currentValue) => accumulator + currentValue.count,
        0
    );

    return (
        <Box
            sx={{
                width: "100%",
                height: "9px",
                borderRadius: "30px",
                display: "flex",
                mb: { xs: "15px", md: "25px" },
            }}
        >
            {contentMainLineListContent.map(({ id, ...item }) => (
                <ContentMainLineItem
                    key={id}
                    {...item}
                    boxModel={boxModel}
                    model={model}
                    totalCount={totalCount}
                    border={
                        id == 0
                            ? "30px 0 0 30px"
                            : id == contentMainLineListContent.length - 1
                            ? "0 30px 30px 0"
                            : "none"
                    }
                />
            ))}
        </Box>
    );
};
