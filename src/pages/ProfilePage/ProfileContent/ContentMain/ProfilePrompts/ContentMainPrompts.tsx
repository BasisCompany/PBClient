import { useState } from "react";
import { Box } from "@mui/material";
import { ContentMainLine } from "./ContentMainLine";
import { ContentMainModels } from "./ContentMainModels";
import { ContentMainSelect } from "./ContentMainSelect";
import { ContentMainToggleMode } from "./ContentMainToggleMode";

export const ContentMainPrompts = () => {
    const [model, setModel] = useState(() => [
        "ChatGPT",
        "Midjourney",
        "DALL-E",
        "Stable Diff.",
    ]);

    const handleModel = (
        _: React.MouseEvent<HTMLElement>,
        newModel: string[]
    ) => {
        setModel(newModel);
    };

    const boxModel = (model: string) => {
        setModel((prev) => {
            return prev.includes(model)
                ? prev.filter((e) => e !== model)
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
            <Box>
                <ContentMainLine model={model} boxModel={boxModel} />
                <ContentMainModels model={model} handleModel={handleModel} />
            </Box>
            <Box>
                {model.map((item) => (
                    <Box>{item}</Box>
                ))}
            </Box>
        </>
    );
};
