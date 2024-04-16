import {
    FieldValues,
    useForm,
    FormProvider,
    UseFormProps,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { ExtSubmitHandler } from "./types";

interface FormProps<TFormValues extends FieldValues>
    extends UseFormProps<TFormValues> {
    onSubmit: ExtSubmitHandler<TFormValues>;
    schema: ObjectSchema<TFormValues>;
    children: JSX.Element[] | JSX.Element;
}

export const Form = <TFormValues extends FieldValues>({
    onSubmit,
    children,
    schema,
    ...props
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        mode: "onBlur",
        resolver: yupResolver(schema),
        ...props,
    });

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) => {
                    onSubmit(data, methods);
                })}
            >
                {children}
            </form>
        </FormProvider>
    );
};
