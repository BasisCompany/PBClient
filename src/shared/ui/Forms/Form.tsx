import { FieldValues, useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";
import { ExtSubmitHandler } from "./types";

interface FormProps<TFormValues extends FieldValues> {
    onSubmit: ExtSubmitHandler<TFormValues>;
    schema: ObjectSchema<TFormValues>;
    children: JSX.Element[] | JSX.Element;
}

export const Form = <TFormValues extends FieldValues>({
    onSubmit,
    children,
    schema,
}: FormProps<TFormValues>) => {
    const methods = useForm<TFormValues>({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((data) => {
                    onSubmit(data, methods.reset);
                })}
            >
                {children}
            </form>
        </FormProvider>
    );
};
