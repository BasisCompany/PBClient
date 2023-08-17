import { ChatGPTIcon } from "../../../../../assets/ChatGPTIcon";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";

export const contentMainLineListContent = [
    {
        id: 0,
        title: "ChatGPT",
        icon: <ChatGPTIcon />,
        color: "143,254,9",
        count: 25,
    },
    {
        id: 1,
        title: "Midjourney",
        icon: <SailingOutlinedIcon />,
        color: "255, 128, 171",
        count: 12,
    },
    {
        id: 2,
        title: "DALL-E",
        icon: <ColorLensOutlinedIcon />,
        color: "132, 255, 255",
        count: 6,
    },
    {
        id: 3,
        title: "Stable Diff.",
        icon: <BrushOutlinedIcon />,
        color: "255, 209, 128",
        count: 3,
    },
];
