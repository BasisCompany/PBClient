import { FC } from "react";
import { SelectChangeEvent, ListItemIcon } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { CustomSelect } from "../../../UI/Select/CustomSelect";
import { CustomSelectMenuItem } from "../../../UI/Select/CustomSelectMenuItem";

const getSaveSearchParams = (
    searchParams: URLSearchParams,
    validParams: string[],
    paramName?: string,
    defaultParam?: string
) => {
    const defParam = defaultParam ?? validParams[0];
    const currentSelect = searchParams.get(paramName ?? "filter") || defParam;
    return validParams.includes(currentSelect) ? currentSelect : defParam;
};

interface ProfileSelectProps {
    selectItems: {
        params: string[];
        icons: JSX.Element[];
        labels: string[];
    };
}

export const ProfileSelect: FC<ProfileSelectProps> = ({ selectItems }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentSelect = getSaveSearchParams(searchParams, selectItems.params);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        const selectValue = event.target.value as string;
        if (selectValue === selectItems.params[0]) {
            searchParams.delete("filter");
        } else {
            searchParams.set("filter", selectValue);
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
