import { useState } from "react";
import { Box } from "@mui/material";
import { ContentMainLine } from "./ContentMainLine";
import { ContentMainModels } from "./ContentMainModels";
import { ContentMainToggleMode } from "./ContentMainToggleMode";
import { ProfileSelect } from "../../components/ProfileSelect";

import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const promptsSelectItems = {
    params: ["new", "rating", "like", "shop"],
    icons: [
        <UpdateRoundedIcon sx={{ fontSize: "19px" }} />,
        <GradeRoundedIcon sx={{ fontSize: "19px" }} />,
        <FavoriteRoundedIcon sx={{ fontSize: "19px" }} />,
        <ShoppingCartRoundedIcon sx={{ fontSize: "19px" }} />,
    ],
    labels: ["Новые", "Высокий рейтинг", "Много лайков", "Популярные"],
};

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
                <ProfileSelect selectItems={promptsSelectItems} />
                <ContentMainToggleMode />
            </Box>
            <Box>
                <ContentMainLine model={model} boxModel={boxModel} />
                <ContentMainModels model={model} handleModel={handleModel} />
            </Box>
            <Box>
                {model.map((item) => (
                    <Box sx={{ height: "100px" }}>{item}</Box>
                ))}
            </Box>
        </>
    );
};
