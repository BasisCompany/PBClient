import { useState } from "react";
import { ListItemIcon, SelectChangeEvent } from "@mui/material";
import { CustomSelect } from "../../../../UI/Select/CustomSelect";
import { CustomSelectMenuItem } from "../../../../UI/Select/CustomSelectMenuItem";

import UpdateRoundedIcon from "@mui/icons-material/UpdateRounded";
import GradeRoundedIcon from "@mui/icons-material/GradeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export const ContentMainSelect = () => {
    const [select, setSelect] = useState("new");

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        setSelect(event.target.value as string);
    };
    return (
        <CustomSelect value={select} onChange={handleChange}>
            <CustomSelectMenuItem value="new">
                <ListItemIcon>
                    <UpdateRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Новые
            </CustomSelectMenuItem>
            <CustomSelectMenuItem value="rating">
                <ListItemIcon>
                    <GradeRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Высокий рейтинг
            </CustomSelectMenuItem>
            <CustomSelectMenuItem value="like">
                <ListItemIcon>
                    <FavoriteRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Много лайков
            </CustomSelectMenuItem>
            <CustomSelectMenuItem value="shop">
                <ListItemIcon>
                    <ShoppingCartRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Популярные
            </CustomSelectMenuItem>
        </CustomSelect>
    );
};
