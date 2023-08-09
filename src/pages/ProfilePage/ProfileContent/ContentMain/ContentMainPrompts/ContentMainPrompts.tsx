import { Box, SvgIcon, ToggleButtonGroup } from "@mui/material";
import * as React from "react";

import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import SailingOutlinedIcon from "@mui/icons-material/SailingOutlined";

import { CustomToggleButton } from "./CustomToggleButton";
import { ContentMainSelect } from "./ContentMainSelect";
import { ContentMainToggleMode } from "./ContentMainToggleMode";

// const CustomChip = styled((props: ChipProps) => <Chip {...props} />)(
//     ({ theme }) => ({
//         "& .MuiChip-icon": {
//             margin: 0,
//         },
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "70px",
//         backgroundColor: theme.palette.background.default,
//         //border: "1px solid",
//         borderRadius: "3px",
//         fontWeight: theme.typography.fontWeightLight,
//         fontSize: theme.typography.pxToRem(18),
//     })
// );

export const ContentMainPrompts = () => {
    const [model, setModel] = React.useState(() => [
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
                ? prev.toSpliced(prev.indexOf(model), 1)
                : [...prev, model];
        });
    };

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "15px",
                    //bgcolor: "#543",
                }}
            >
                <ContentMainSelect />
                <ContentMainToggleMode />
            </Box>
            <Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "10px",
                        borderRadius: "30px",
                        display: "flex",
                        mb: "25px",
                    }}
                >
                    <Box
                        onClick={() => boxModel("ChatGPT")}
                        sx={{
                            transition: "all 0.2s ease-in",
                            bgcolor: model.includes("ChatGPT")
                                ? "rgba(143,254,9,1)"
                                : "rgba(143,254,9,0.5)",

                            width: "48%",
                            height: "100%",
                            borderRadius: "30px 0 0 30px",
                            "&:hover": {
                                cursor: "pointer",
                                //bgcolor: "rgba(117,172,157,1)",
                            },
                        }}
                    ></Box>
                    <Box
                        onClick={() => boxModel("Midjourney")}
                        sx={{
                            transition: "all 0.2s ease-in",
                            bgcolor: model.includes("Midjourney")
                                ? "rgba(255, 128, 171, 1)"
                                : "rgba(255, 128, 171, 0.5)",

                            width: "6%",
                            height: "100%",
                            "&:hover": {
                                cursor: "pointer",
                                //bgcolor: "rgba(255, 128, 171, 1)",
                            },
                        }}
                    ></Box>
                    <Box
                        onClick={() => boxModel("DALL-E")}
                        sx={{
                            transition: "all 0.2s ease-in",
                            bgcolor: model.includes("DALL-E")
                                ? "rgba(132, 255, 255, 1)"
                                : "rgba(132, 255, 255, 0.5)",

                            width: "40%",
                            height: "100%",
                            "&:hover": {
                                cursor: "pointer",
                                //bgcolor: "rgba(132, 255, 255, 1)",
                            },
                        }}
                    ></Box>
                    <Box
                        onClick={() => boxModel("Stable Diff.")}
                        sx={{
                            transition: "all 0.2s ease-in",
                            bgcolor: model.includes("Stable Diff.")
                                ? "rgba(255, 209, 128, 1)"
                                : "rgba(255, 209, 128, 0.5)",

                            width: "6%",
                            height: "100%",
                            borderRadius: "0 30px 30px 0",
                            "&:hover": {
                                cursor: "pointer",
                                //bgcolor: "rgba(255, 209, 128, 1)",
                            },
                        }}
                    ></Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mb: "15px",
                }}
            >
                <ToggleButtonGroup value={model} onChange={handleModel}>
                    <CustomToggleButton
                        value="ChatGPT"
                        colorbutton="143,254,9"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            //mr: "10px",
                        }}
                        disableRipple
                    >
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
                                />
                            </svg>
                        </SvgIcon>
                        ChatGPT
                    </CustomToggleButton>

                    <CustomToggleButton
                        value="Midjourney"
                        colorbutton="255, 128, 171"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                        disableRipple
                    >
                        <SailingOutlinedIcon />
                        Midjourney
                    </CustomToggleButton>
                    <CustomToggleButton
                        value="DALL-E"
                        colorbutton="132, 255, 255"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            //mr: "10px",
                        }}
                        disableRipple
                    >
                        <ColorLensOutlinedIcon />
                        DALL-E
                    </CustomToggleButton>
                    <CustomToggleButton
                        value="Stable Diff."
                        colorbutton="255, 209, 128"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                        }}
                        disableRipple
                    >
                        <BrushOutlinedIcon />
                        Stable Diff.
                    </CustomToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box>
                {model.map((item) => (
                    <Box>{item}</Box>
                ))}
            </Box>
        </Box>
    );
};
