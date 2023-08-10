import { FC } from "react";
import { Box } from "@mui/material";
import { ContentMainLine } from "./ContentMainLine";
import { ContentMainModels } from "./ContentMainModels";

interface ContentMainFilterProps {
    model: Array<string>;
    boxModel: (title: string) => void;
    handleModel: (
        event: React.MouseEvent<HTMLElement>,
        newModel: string[]
    ) => void;
}

export const ContentMainFilter: FC<ContentMainFilterProps> = ({
    model,
    boxModel,
    handleModel,
}) => {
    return (
        <Box>
            <ContentMainLine model={model} boxModel={boxModel} />
            <ContentMainModels model={model} handleModel={handleModel} />
        </Box>
    );
};
