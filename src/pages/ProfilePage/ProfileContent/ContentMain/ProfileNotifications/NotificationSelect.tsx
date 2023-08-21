import { SelectChangeEvent, ListItemIcon } from "@mui/material";
import { CustomSelect } from "../../../../../UI/Select/CustomSelect";
import { CustomSelectMenuItem } from "../../../../../UI/Select/CustomSelectMenuItem";

import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import SortRoundedIcon from "@mui/icons-material/SortRounded";
import { useSearchParams } from "react-router-dom";

const selectItems = ["unread", "read", "all"];

const getUrlSelectItem = (searchParams: URLSearchParams) => {
    const currentSelect = searchParams.get("filter") || "unread";
    return selectItems.includes(currentSelect) ? currentSelect : "unread";
};

export const NotificationSelect = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSelect = getUrlSelectItem(searchParams);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const selectValue = event.target.value as string;
        if (selectValue === "unread") {
            searchParams.delete("filter");
        } else {
            searchParams.set("filter", selectValue);
        }
        setSearchParams(searchParams);
    };

    return (
        <CustomSelect value={currentSelect} onChange={handleChange}>
            <CustomSelectMenuItem value="unread">
                <ListItemIcon>
                    <DoneRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Непрочитанные
            </CustomSelectMenuItem>
            <CustomSelectMenuItem value="read">
                <ListItemIcon>
                    <DoneAllRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Прочитанные
            </CustomSelectMenuItem>
            <CustomSelectMenuItem value="all">
                <ListItemIcon>
                    <SortRoundedIcon sx={{ fontSize: "19px" }} />
                </ListItemIcon>
                Все уведомления
            </CustomSelectMenuItem>
        </CustomSelect>
    );
};
