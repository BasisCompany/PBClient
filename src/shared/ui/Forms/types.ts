import { FieldValues, UseFormReset } from "react-hook-form";

export type ExtSubmitHandler<TFieldValues extends FieldValues> = (
    data: TFieldValues,
    reset: UseFormReset<TFieldValues>,
    event?: React.BaseSyntheticEvent
) => unknown;
