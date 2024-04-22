import { FC, useEffect } from "react";
import { useController, useFormContext } from "react-hook-form";
import { useDebounce } from "use-debounce";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import {
    QueryDefinition,
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { LazyQueryTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { InputTextProps, InputText } from "./InputText";
import { CheckResponse } from "@/entities/auth/api/types";

type checkInputQuery = LazyQueryTrigger<
    QueryDefinition<
        string,
        BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
        never,
        CheckResponse,
        "authApi"
    >
>;

interface InputCheckProps extends InputTextProps {
    name: string;
    checkInput: checkInputQuery;
    checkErrorMessage: string;
}

type FieldName = Record<string, string>;

export const InputCheck: FC<InputCheckProps> = ({
    name,
    checkInput,
    checkErrorMessage,
    ...props
}) => {
    const {
        watch,
        setError,
        clearErrors,
        trigger,
        formState: { defaultValues },
    } = useFormContext<FieldName>();

    const {
        fieldState: { isDirty, invalid },
    } = useController({ name });

    const fieldValue = watch<string>(name);

    const [debounceValue] = useDebounce(fieldValue, 1000);

    useEffect(() => {
        if (
            !isDirty ||
            defaultValues![name] === debounceValue ||
            debounceValue === ""
        ) {
            clearErrors(name);
            return;
        }
        const check = async () => {
            const isSchemaValid = await trigger(name);
            if (!isSchemaValid) {
                return;
            }

            try {
                const result = await checkInput(debounceValue).unwrap();
                if (result.available) {
                    clearErrors(name);
                } else {
                    setError(name, {
                        type: "custom",
                        message: checkErrorMessage,
                    });
                }
            } catch (error) {
                setError(name, {
                    type: "custom",
                    message: checkErrorMessage,
                });
            }
        };
        void check();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue, isDirty, name]);

    const endIcon = invalid ? (
        <CloseIcon sx={{ color: "rgba(233, 30, 99, 1)" }} />
    ) : (
        <CheckIcon sx={{ color: "rgba(76, 175, 80, 1)" }} />
    );

    return (
        <InputText
            name={name}
            endIcon={isDirty ? endIcon : undefined}
            {...props}
        />
    );
};
