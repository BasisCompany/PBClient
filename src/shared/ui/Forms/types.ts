import { FieldValues, UseFormReturn } from "react-hook-form";

export type ExtSubmitHandler<TFieldValues extends FieldValues> = (
    data: TFieldValues,
    reset: UseFormReturn<TFieldValues, unknown, TFieldValues>,
    event?: React.BaseSyntheticEvent
) => unknown;
