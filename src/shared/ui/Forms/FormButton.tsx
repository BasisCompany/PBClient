import { FC, ReactNode } from "react";
import { FieldValues, UseFormReturn, useFormContext } from "react-hook-form";

interface FormButtonProps {
    renderButton: (
        form: UseFormReturn<FieldValues, unknown, FieldValues>
    ) => ReactNode;
}

export const FormButton: FC<FormButtonProps> = ({ renderButton }) => {
    const form = useFormContext();
    return renderButton(form);
};
