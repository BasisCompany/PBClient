import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";
import { SvgIcon } from "@mui/material";

const modelType = [
    {
        icon: (
            <SailingOutlinedIcon
                sx={{
                    fontSize: 20,
                    marginRight: "2px",
                    color: "rgba(255, 128, 171,1)",
                }}
            />
        ),
        iconName: "Midjourney",
    },
    {
        icon: (
            <ColorLensOutlinedIcon
                sx={{
                    fontSize: 20,
                    marginRight: "2px",
                    color: "rgba(132, 255, 255,1)",
                }}
            />
        ),
        iconName: "DALL-E",
    },
    {
        icon: (
            <BrushOutlinedIcon
                sx={{
                    fontSize: 20,
                    marginRight: "2px",
                    color: "rgba(255, 209, 128,1)",
                }}
            />
        ),
        iconName: "Stable Diff.",
    },
    {
        icon: (
            <SvgIcon>
                <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 88.96 89"
                >
                    <path
                        d="M252.46,222.53a16.94,16.94,0,0,0-16.11,11.67A16.89,16.89,0,0,0,227.28,262a16.58,16.58,0,0,0,1.43,13.66,16.93,16.93,0,0,0,18.19,8.11,16.72,16.72,0,0,0,12.57,5.62,17,17,0,0,0,16.11-11.67,16.91,16.91,0,0,0,9.07-27.84v0a16.64,16.64,0,0,0-1.43-13.68,16.93,16.93,0,0,0-18.17-8.09,16.79,16.79,0,0,0-12.59-5.6Zm0,4.35,0,0a12.57,12.57,0,0,1,8.05,2.9l-.41.23-13.34,7.68a2.17,2.17,0,0,0-1.09,1.9v18l-5.74-3.31V239.43a12.55,12.55,0,0,1,12.55-12.55Zm16.07,5.25a12.55,12.55,0,0,1,12.4,14.67c-.09-.07-.27-.16-.38-.23l-13.34-7.7a2.24,2.24,0,0,0-2.2,0l-15.63,9v-6.62l12.9-7.45A12.51,12.51,0,0,1,268.53,232.13Zm-33,6.85v15.83a2.19,2.19,0,0,0,1.09,1.9l15.61,9L246.47,269l-12.89-7.43a12.54,12.54,0,0,1,2-22.63Zm29.9,3.92,12.91,7.43a12.51,12.51,0,0,1,4.58,17.13l0,0a12.53,12.53,0,0,1-6.53,5.48V257.12a2.17,2.17,0,0,0-1.09-1.9l-15.63-9,5.74-3.3ZM256,248.36l6.58,3.8v7.59l-6.58,3.8-6.58-3.8v-7.59Zm10.34,6,5.74,3.31v14.88a12.55,12.55,0,0,1-12.55,12.55v0a12.53,12.53,0,0,1-8-2.9l.41-.23,13.34-7.68a2.12,2.12,0,0,0,1.09-1.9v-18Zm-3.75,9.74v6.62l-12.91,7.43a12.58,12.58,0,0,1-17.15-4.58h0a12.43,12.43,0,0,1-1.5-8.38c.09.07.27.16.38.23l13.34,7.7a2.24,2.24,0,0,0,2.2,0l15.61-9Z"
                        transform="translate(-211.52 -211.5)"
                        fill="rgba(143,254,9,1)"
                    />
                </svg>
            </SvgIcon>
        ),
        iconName: "ChatGPT",
    },
];

const imagesArray = [
    "https://assets.promptbase.com/DALLE_IMAGES%2FjEY0vtwRxod3rQYgO8RXcWQZD0Q2%2Fresized%2F1710156806264i_w_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2F67DekkLLefN6YB34mppIjD56XAH2%2Fresized%2F1710186215114z_w_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FjvWQHJsEXzUiab63M494tuNPl5F2%2Fresized%2F1710149303803s_w_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FGfbDHcnN92Vi5hj8Kti1IImaAsn2%2Fresized%2F1710145304740s_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FoZl0mAAv8KgeYAiDrBU3tmnYWfD3%2Fresized%2F1710147377227i_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2F7TV86Bt0hhjzrCJIEfWp%2Fresized%2F1710160603580_500x500.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2Fkh1InA3UwaSGScoag2atQLMbqLm2%2Fresized%2F1710158131756r_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FxPTaMC17UxnsQ6dPO24X%2Fresized%2F1710196244519_500x500.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FouIDT3hPBRhc34rub0IhYiAXLQM2%2Fresized%2F1710189008187r_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FeG1AhVWVTJOX4SqxE1AUFLv1bC73%2Fresized%2F1710182189897y_w_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2FNINfnicQCgVfh4dU2EKvGGhmB2X2%2Fresized%2F1710114208527d_800x800.webp",
    "https://assets.promptbase.com/DALLE_IMAGES%2Fxzt3eOI8sCAGqHPvM3XK%2Fresized%2F1710169943602_500x500.webp",
];

function hashNumber(num: number, mod: number) {
    let hash = num ^ 123456789;
    hash = Math.abs(hash);
    return hash % mod;
}

export function getRandomImage(id: number) {
    return imagesArray[hashNumber(id, imagesArray.length)];
}

export function getRandomModel(id: number) {
    return modelType[hashNumber(id, modelType.length)];
}
