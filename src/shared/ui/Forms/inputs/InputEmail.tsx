import { FC } from "react";
import { InputTextProps } from "./InputText";
import { InputCheck } from "./InputCheck";
import { useLazyCheckEmailQuery } from "@/entities/auth";

export const InputEmail: FC<Omit<InputTextProps, "name">> = (props) => {
    const [checkEmail] = useLazyCheckEmailQuery();
    return (
        <InputCheck
            name="email"
            checkInput={checkEmail}
            checkErrorMessage="Почта некорректная или уже занята"
            {...props}
        />
    );
};
