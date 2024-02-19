import { FC } from "react";
import { SelectChangeEvent, ListItemIcon } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { CustomSelect } from "../../../shared/ui/Select/CustomSelect";
import { CustomSelectMenuItem } from "../../../shared/ui/Select/CustomSelectMenuItem";
import { getSortParamSafe } from "../../../utils/getParamSafely";

interface ProfileSelectProps {
    selectItems: {
        params: string[];
        icons: JSX.Element[];
        labels: string[];
    };
}

export const ProfileSelect: FC<ProfileSelectProps> = ({ selectItems }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSelect = getSortParamSafe(searchParams, selectItems.params);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const selectValue = event.target.value as string;

        if (currentSelect !== selectValue) {
            searchParams.delete("page");
        }
        if (selectValue === selectItems.params[0]) {
            searchParams.delete("sort");
        } else {
            searchParams.set("sort", selectValue);
        }
        setSearchParams(searchParams);
    };

    return (
        <CustomSelect value={currentSelect} onChange={handleChange}>
            {selectItems.params.map((item, index) => (
                <CustomSelectMenuItem key={item} value={item}>
                    <ListItemIcon>{selectItems.icons[index]}</ListItemIcon>
                    {selectItems.labels[index]}
                </CustomSelectMenuItem>
            ))}
        </CustomSelect>
    );
};
