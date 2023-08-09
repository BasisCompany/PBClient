import { FormControl, ListItemIcon, SelectChangeEvent } from "@mui/material";
import { CustomMenuItem } from "./CustomMenuItem";
import { CustomSelect } from "./CustomSelect";
import { useState } from "react";
import { contentMainSelectListContent } from "./contentMainSelectListContent";

export const ContentMainSelect = () => {
    const [select, setSelect] = useState("new");

    const handleChange = (event: SelectChangeEvent) => {
        setSelect(event.target.value);
    };
    return (
        <FormControl>
            <CustomSelect value={select} onChange={handleChange}>
                {contentMainSelectListContent.map((item) => (
                    <CustomMenuItem value={item.value}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        {item.label}
                    </CustomMenuItem>
                ))}
            </CustomSelect>
        </FormControl>
    );
};
