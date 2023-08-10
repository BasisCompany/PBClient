import { Box } from "@mui/material";
import { useState } from "react";

import { ContentMainSelect } from "./ContentMainSelect";
import { ContentMainToggleMode } from "./ContentMainToggleMode";
import { ContentMainFilter } from "./ContentMainFilter";

export const ContentMainPrompts = () => {
    const [model, setModel] = useState(() => [
        "ChatGPT",
        "Midjourney",
        "DALL-E",
        "Stable Diff.",
    ]);

    const handleModel = (
        event: React.MouseEvent<HTMLElement>,
        newModel: string[]
    ) => {
        console.log(newModel);
        setModel(newModel);
    };

    const boxModel = (model: string) => {
        setModel((prev) => {
            return prev.includes(model)
                ? prev.toSplicedCustom(prev.indexOf(model), 1)
                : [...prev, model];
        });
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                }}
            >
                <ContentMainSelect />
                <ContentMainToggleMode />
            </Box>
            <ContentMainFilter
                model={model}
                boxModel={boxModel}
                handleModel={handleModel}
            />
            <Box>
                {model.map((item) => (
                    <Box>{item}</Box>
                ))}
            </Box>
        </>
    );
};
