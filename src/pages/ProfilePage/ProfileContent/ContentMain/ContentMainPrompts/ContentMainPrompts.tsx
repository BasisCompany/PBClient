import {
    Box,
    Chip,
    ChipProps,
    ListItemIcon,
    SvgIcon,
    ToggleButton,
    ToggleButtonGroup,
    ToggleButtonGroupProps,
    ToggleButtonProps,
} from "@mui/material";
import * as React from "react";

import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, SelectProps } from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

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

const CustomToggleButtonGroup = styled((props: ToggleButtonGroupProps) => (
    <ToggleButtonGroup {...props} />
))(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        transition: "all 0.2s ease-out",
        margin: 0,
        border: 0,
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:first-of-type": {
            marginRight: "5px",
            borderRadius: theme.shape.borderRadius,
        },

        "&:hover:not(.Mui-selected)": {
            backgroundColor: "rgba(153, 51, 255,0.2)",
            transition: "all 0.2s ease-in",
            "& .MuiListItemIcon-root": {},
        },
        "&.Mui-selected": {
            backgroundColor: "rgba(153, 51, 255,0.4)",
            "&:hover": {
                backgroundColor: "rgba(153, 51, 255,0.4)",
            },
        },
    },
}));

interface CustomToggleButtonProps extends ToggleButtonProps {
    colorbutton: string | "0,0,0";
}

const CustomToggleButton = styled((props: CustomToggleButtonProps) => (
    <ToggleButton {...props} />
))(({ theme, colorbutton }) => ({
    width: "120px",
    height: "60px",
    border: "none",
    borderLeft: "none !important",
    borderRight: "none !important",
    //transition: "all 0.1s ease-out",
    color: `rgba(${colorbutton}, 0.5)`,
    "&:active": {},
    "& .MuiSvgIcon-root": {
        fontSize: "2rem",
        fill: theme.palette.text.secondary,
    },
    "&:hover": {
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
        transition: "all 0.1s ease-out",
    },
    "&:hover:not(.Mui-selected)": {
        //backgroundColor: `rgba(${colorbutton}, 0.2)`,
        backgroundColor: "transparent",
        color: `rgba(${colorbutton}, 1)`,
        //transition: "all 0.2s ease-in",
        "& .MuiSvgIcon-root": {
            //fill: `rgba(${colorbutton}, 1)`,
        },
    },
    "&.Mui-selected": {
        transition: "all 0.2s ease-in",
        //backgroundColor: `rgba(${colorbutton}, 0.4)`,
        backgroundColor: "transparent",
        marginLeft: "none",
        color: `rgba(${colorbutton}, 1)`,
        "&:hover": {
            color: `rgba(${colorbutton}, 1)`,
            backgroundColor: "transparent",
        },
        "& .MuiSvgIcon-root": {
            fill: `rgba(${colorbutton}, 1)`,
        },
        borderBottom: `5px solid rgba(${colorbutton}, 1)`,
    },
    "&.MuiToggleButton-root:not(:first-of-type)": {
        marginLeft: "0",
    },
}));

const CustomSelect = styled((props: SelectProps) => <Select {...props} />)(
    ({ theme }) => ({
        "& .MuiSelect-select": {
            padding: "0px",
            color: theme.palette.text.primary,
            borderRadius: "4px",
            backgroundColor: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: theme.typography.pxToRem(15),
            display: "flex",
            alignItems: "center",
            border: "none",
            cursor: "pointer",
            "&:hover": {
                cursor: "pointer",
            },
        },
        "& .MuiListItemIcon-root": {
            minWidth: "30px",
            paddingBottom: "2px",
            opacity: 0.6,
            color: theme.palette.secondary.main,
        },
        "& .MuiSvgIcon-root": {
            fontSize: "1.5rem",
        },
        "& .MuiSelect-icon": {
            fontSize: 15,
            color: theme.palette.text.primary,
        },
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "4px",
            borderWidth: "0px",
        },
        "& .MuiSelect-select.MuiInputBase-input.MuiOutlinedInput-input": {
            paddingLeft: "7px",
            paddingRight: "25px",
            height: "33px",
        },
    })
);

const CustomMenuItem = styled((props: MenuItemProps) => (
    <MenuItem {...props} />
))(({ theme }) => ({
    transition: "all 0.1s ease-out",
    paddingTop: "10px",
    paddingBottom: "10px",
    textTransform: "none",
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    "& .MuiListItemIcon-root": {
        minWidth: "25px",
    },
    "&:hover:not(.Mui-selected)": {
        color: theme.palette.secondary.main,
        backgroundColor: "rgba(153, 51, 255,0.07)",
        transition: "all 0.1s ease-in",
        "& .MuiListItemIcon-root": {
            transition: "all 0.1s ease-in",
            color: theme.palette.secondary.main,
        },
    },
    "&.Mui-selected": {
        color: theme.palette.secondary.main,
        backgroundColor: "rgba(153, 51, 255,0.15) !important",
        "& .MuiListItemIcon-root": {
            color: theme.palette.secondary.main,
        },
        "&:hover": {
            backgroundColor: "rgba(153, 51, 255, 0.15)",
        },
    },
}));

export const ContentMainPrompts = () => {
    const [alignment, setAlignment] = React.useState("left");
    const [model, setModel] = React.useState(() => [
        "ChatGPT",
        "Midjourney",
        "DALL-E",
        "Stable Diff.",
    ]);
    console.log(model);
    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
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

    const [select, setSelect] = React.useState("new");

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };
    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: "5px",
                }}
            >
                <FormControl>
                    <CustomSelect value={select} onChange={handleChange}>
                        <CustomMenuItem value="new">
                            <ListItemIcon>
                                <UpdateRoundedIcon sx={{ fontSize: "19px" }} />
                            </ListItemIcon>
                            Новые
                        </CustomMenuItem>
                        <CustomMenuItem value="rating">
                            <ListItemIcon>
                                <GradeRoundedIcon sx={{ fontSize: "19px" }} />
                            </ListItemIcon>
                            Высокий рейтинг
                        </CustomMenuItem>
                        <CustomMenuItem value="like">
                            <ListItemIcon>
                                <FavoriteRoundedIcon
                                    sx={{ fontSize: "19px" }}
                                />
                            </ListItemIcon>
                            Много лайков
                        </CustomMenuItem>
                        <CustomMenuItem value="shop">
                            <ListItemIcon>
                                <ShoppingCartRoundedIcon
                                    sx={{ fontSize: "19px" }}
                                />
                            </ListItemIcon>
                            Популярные
                        </CustomMenuItem>
                    </CustomSelect>
                </FormControl>
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
                                //mr: "10px",
                            }}
                            disableRipple
                        >
                            <SvgIcon>
                                <svg
                                    id="Layer_1"
                                    data-name="Layer 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.92115 1.02327C3.7428 1.12381 3.72982 1.2957 3.87575 1.54543C3.93088 1.63948 4.07681 1.9184 4.20328 2.16488C4.94589 3.65028 5.40961 5.00919 5.63337 6.35189C5.72417 6.90648 5.73066 8.15512 5.64634 8.83944C5.42259 10.6524 4.81293 12.1962 3.88872 13.2924C3.6974 13.5194 3.6747 13.5616 3.69091 13.6491C3.71361 13.7724 3.84981 13.8956 3.96007 13.8956C4.00547 13.8956 4.13518 13.8373 4.24544 13.7691C5.20532 13.1627 6.49596 12.6794 7.7477 12.4621C8.12063 12.3973 8.27953 12.3875 9.10969 12.3875C9.92689 12.3875 10.115 12.3973 10.5365 12.4621C11.4867 12.6081 12.4206 12.8481 13.2378 13.1529C13.7015 13.3281 13.815 13.3378 13.9091 13.2048C13.9707 13.1173 13.9707 12.981 13.9091 12.621C13.5556 10.6102 12.3493 8.1389 10.7246 6.1054C9.15833 4.14325 7.00833 2.41785 4.73186 1.29245C4.14815 1.00381 4.02492 0.964888 3.92115 1.02327ZM5.62364 2.40812C7.48179 3.51731 9.15185 4.98649 10.4555 6.66324C11.6261 8.16485 12.5568 9.90322 13.0627 11.5281C13.2184 12.034 13.3416 12.5659 13.3027 12.5659C13.2832 12.5659 13.0854 12.5075 12.8584 12.4362C12.0866 12.1864 11.1819 11.9886 10.342 11.8783C9.8977 11.82 8.26655 11.8232 7.87741 11.8816C7.06022 12.0016 6.02251 12.2935 5.33179 12.5951C5.16316 12.6664 5.01399 12.7281 5.00102 12.7281C4.98805 12.7281 5.06263 12.5627 5.16964 12.3616C5.84091 11.0838 6.21384 9.55944 6.26248 7.87945C6.28194 7.15296 6.25275 6.71188 6.1425 6.05675C5.94468 4.91189 5.41934 3.36163 4.83239 2.19083C4.76753 2.06434 4.71565 1.94759 4.71565 1.92813C4.71565 1.88921 5.04317 2.0611 5.62364 2.40812Z"
                                        stroke="#fff"
                                        strokeWidth="0.6"
                                    />
                                    <path
                                        d="M9.19166 3.0643C9.10119 3.10653 9.03979 3.25919 9.06564 3.36638C9.08826 3.46058 9.10442 3.47682 9.45664 3.72692C10.1481 4.21739 11.1079 5.12038 11.612 5.75377C12.7623 7.20244 14.0516 9.80096 14.7399 12.0714C14.9629 12.8087 14.9629 12.8022 15.076 12.851C15.16 12.8867 15.2181 12.8835 15.4185 12.8445C15.551 12.8185 15.7998 12.7958 15.9678 12.7925C16.3168 12.7893 16.4978 12.8347 17.1602 13.1011C17.5835 13.27 17.6611 13.2765 17.7774 13.1595C17.8808 13.0556 17.8549 12.9159 17.6352 12.3443C16.9275 10.5188 16.0228 8.83301 15.0857 7.59222C14.2326 6.47161 12.5684 4.84104 11.4536 4.03875C10.775 3.55152 10.1223 3.20397 9.66991 3.08704C9.4017 3.01883 9.29507 3.01233 9.19166 3.0643ZM12.0805 5.25031C12.4877 5.60111 13.4474 6.53982 13.8868 7.02055C14.7819 7.99824 15.5284 9.11885 16.2586 10.5935C16.669 11.4153 17.0923 12.3962 17.0568 12.432C17.0471 12.4417 16.9211 12.4125 16.7757 12.367C16.3814 12.2403 16.11 12.2111 15.7319 12.2501C15.5542 12.2663 15.4023 12.2793 15.3991 12.2728C15.3926 12.2663 15.3022 12 15.1955 11.6784C14.3392 9.06038 13.1016 6.66325 11.8285 5.15286C11.683 4.97746 11.5861 4.84754 11.612 4.86378C11.641 4.88002 11.8511 5.05217 12.0805 5.25031Z"
                                        stroke="#fff"
                                        strokeWidth="0.6"
                                    />
                                    <path
                                        d="M18.7321 13.6279C18.5536 13.6408 17.9177 13.6827 17.3207 13.7182C16.7236 13.7569 16.0293 13.8021 15.7795 13.8182C15.5296 13.8375 14.7476 13.8859 14.0436 13.9311C13.3395 13.9762 12.3109 14.0407 11.7561 14.0762C11.2045 14.1116 10.1727 14.1761 9.46858 14.2213C8.76448 14.2632 8.09933 14.3083 7.99225 14.318C7.88518 14.3277 7.21353 14.3696 6.49971 14.4148C5.78588 14.4599 4.64051 14.5309 3.95265 14.576C3.26478 14.6212 2.671 14.6566 2.62882 14.6566C2.58664 14.6566 2.50877 14.7018 2.45361 14.7534C2.31733 14.8888 2.33356 14.9565 2.65478 15.5531C2.80079 15.8272 2.91435 16.0529 2.90786 16.0562C2.90462 16.0626 2.62558 16.2497 2.29138 16.4754C1.66516 16.8978 1.39909 17.0429 1.25633 17.0429C1.20766 17.0429 1.13303 17.072 1.08436 17.1107C1.01622 17.1623 1 17.2042 1 17.3171C1 17.6202 1.29526 17.6718 1.76899 17.4493C1.89877 17.3848 2.27515 17.1558 2.59962 16.9365C3.24206 16.5012 3.54382 16.3335 3.68334 16.3335C3.81313 16.3335 3.99158 16.4464 4.47179 16.8237C5.33487 17.5041 5.87349 17.7072 6.48349 17.5783C6.81444 17.5073 7.11295 17.3558 7.55422 17.0236C8.06039 16.6431 8.21614 16.5528 8.43353 16.5076C8.80667 16.4302 9.0565 16.5302 9.56592 16.9527C10.1467 17.4331 10.4679 17.5912 10.9319 17.617C11.4251 17.6428 11.7853 17.488 12.3888 16.9914C12.5932 16.8237 12.8528 16.6399 12.9631 16.585C13.1545 16.4915 13.1805 16.4883 13.466 16.5012C13.8359 16.5173 13.9592 16.5754 14.4426 16.972C14.8645 17.3203 15.0754 17.4557 15.3414 17.5492C15.6334 17.6492 15.8703 17.6718 16.1461 17.6234C16.5387 17.5589 16.8113 17.4073 17.4342 16.9011C17.8723 16.5463 18.1935 16.4302 18.5472 16.4947C18.8067 16.5431 18.9722 16.6366 19.3616 16.9623C19.845 17.3654 19.9196 17.4202 20.163 17.5331C20.442 17.6621 20.7892 17.6976 20.893 17.6041C21.0001 17.5073 21.0261 17.4106 20.9742 17.288C20.9255 17.1719 20.8314 17.1236 20.5978 17.0913C20.3966 17.0655 20.1857 16.9365 19.8028 16.6108C19.1799 16.0755 18.8781 15.9336 18.3752 15.9336C17.8755 15.9304 17.6094 16.0529 16.9183 16.6044C16.3765 17.0365 16.1137 17.1397 15.721 17.0752C15.5296 17.0462 15.3057 16.9527 15.2863 16.8946C15.283 16.8785 15.4842 16.7624 15.7373 16.6399C16.7139 16.1626 17.8625 15.4725 18.6834 14.8695C19.4913 14.2793 19.8126 14.0149 19.8353 13.9182C19.858 13.8117 19.7866 13.644 19.7055 13.6118C19.6374 13.586 19.1507 13.5957 18.7321 13.6279ZM18.6185 14.2181C18.6185 14.2439 17.9891 14.6921 17.5802 14.963C16.8113 15.466 15.0656 16.4012 14.8061 16.4496C14.7282 16.4625 14.6763 16.4399 14.5303 16.3303C14.0176 15.9465 13.4498 15.8304 12.9241 16.0078C12.6548 16.0981 12.4569 16.2239 11.9897 16.6012C11.4932 17.001 11.3732 17.0558 11.0098 17.0558C10.747 17.0558 10.6983 17.0462 10.5198 16.9559C10.4128 16.9011 10.1435 16.7076 9.92283 16.5302C9.2447 15.982 8.82289 15.8337 8.31672 15.9627C8.01497 16.04 7.76837 16.1755 7.30763 16.5205C6.64572 17.0172 6.36668 17.1203 5.92865 17.03C5.57822 16.9559 5.3511 16.8204 4.6827 16.2884C4.17004 15.8788 4.01429 15.8014 3.67685 15.7982L3.41728 15.795L3.26478 15.5241C3.18366 15.3757 3.11228 15.2371 3.11228 15.2177C3.10903 15.179 3.11228 15.179 4.99094 15.0597C6.48024 14.9662 8.86182 14.8146 10.2797 14.7211C10.8248 14.6889 11.8534 14.6212 12.5672 14.576C13.2811 14.5309 14.1863 14.4728 14.5789 14.447C14.9715 14.4212 15.6659 14.3761 16.1201 14.347C16.5744 14.318 17.2168 14.2761 17.5478 14.2535C18.1837 14.2116 18.6185 14.1955 18.6185 14.2181Z"
                                        stroke="#fff"
                                        strokeWidth="0.6"
                                    />
                                </svg>
                            </SvgIcon>
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
                <CustomToggleButtonGroup
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton
                        value="left"
                        aria-label="left aligned"
                        sx={{ height: "33px", width: "33px" }}
                    >
                        <GridViewRoundedIcon sx={{ fontSize: 24 }} />
                    </ToggleButton>

                    <ToggleButton
                        value="center"
                        aria-label="centered"
                        sx={{ height: "33px", width: "33px" }}
                    >
                        <ViewAgendaRoundedIcon sx={{ fontSize: 24 }} />
                    </ToggleButton>
                </CustomToggleButtonGroup>
            </Box>
            <Box>
                <Box
                    sx={{
                        width: "100%",
                        height: "10px",
                        borderRadius: "30px",
                        display: "flex",
                        mb: "20px",
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
            <Box>
                {model.map((item) => (
                    <Box>{item}</Box>
                ))}
            </Box>
        </Box>
    );
};
