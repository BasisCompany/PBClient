import { FC } from "react";
import { InputTextProps } from "./InputText";
import { InputCheck } from "./InputCheck";
import { useLazyCheckUsernameQuery } from "@/entities/auth";

export const InputUsername: FC<Omit<InputTextProps, "name">> = (props) => {
    const [checkUsername] = useLazyCheckUsernameQuery();

    return (
        <InputCheck
            name="username"
            checkInput={checkUsername}
            checkErrorMessage="Имя пользователя некорректное или уже занято"
            {...props}
        />
    );
};
