import { InferType, mixed, object, string } from "yup";
import {
    ExtSubmitHandler,
    Form,
    FormButton,
    InputText,
    InputUsername,
    Select,
    getDirtyValues,
} from "@/shared/ui/Forms";
import {
    PrimaryButton,
    PrimaryLoadingButton,
} from "@/shared/ui/Buttons/PrimaryButton";
import {
    Gender,
    useProfileUser,
    useUpdateProfileMutation,
} from "@/entities/user";
import { toaster } from "@/app/providers/Toast";
import { FlexBox } from "@/shared/ui/FlexBox";

const changeUserInformation = object({
    username: string()
        .required("Пожалуйста, укажите свой никнейм.")
        .min(3, "Никнейм должен быть больше 3 символов")
        .max(20, "Никнейм должен быть меньше 20 символов")
        .matches(
            /^[a-zA-Z0-9_-]*$/,
            "Вы можете использовать только a-z, 0-9 и нижнее подчёркивание"
        ),

    gender: mixed<Gender>().oneOf(Object.values(Gender)).required(),
    about: string()
        .nullable()
        .default("")
        .max(500, "Превышено количество символов"),
});

export type ChangeUserInformation = InferType<typeof changeUserInformation>;

const genderOptions = [
    { value: "NOT_SPECIFIED", label: "Не указан" },
    { value: "MALE", label: "Мужской" },
    { value: "FEMALE", label: "Женский" },
];

export const UserInformation = () => {
    const { username, gender, about } = useProfileUser();
    const [updateProfile, { isLoading }] = useUpdateProfileMutation();

    const onSubmit: ExtSubmitHandler<ChangeUserInformation> = async (
        data,
        { setError, formState: { dirtyFields }, reset }
    ) => {
        const changedFields = getDirtyValues(dirtyFields, data);

        if (Object.keys(changedFields).length === 0) {
            return;
        }

        try {
            await updateProfile(changedFields).unwrap();
            toaster.success("Данные обновлены");
            reset(data);
        } catch (error) {
            setError("username", {
                type: "validate",
                message: "Имя пользователя некорректное или уже занято",
            });
        }
    };

    return (
        <Form<ChangeUserInformation>
            onSubmit={onSubmit}
            schema={changeUserInformation}
            defaultValues={{
                username: username,
                gender: gender,
                about: about ?? "",
            }}
        >
            <InputUsername
                label="Никнейм"
                counter
                inputProps={{ maxLength: 20 }}
            />
            <Select
                name="gender"
                label="Пол"
                options={genderOptions}
                sx={{ mb: 3 }}
            />
            <InputText
                name="about"
                label="О себе"
                multiline
                counter
                inputProps={{ maxLength: 500 }}
                sx={{ mb: 2 }}
            />
            <FormButton
                renderButton={({ reset, formState: { isDirty, isValid } }) => (
                    <FlexBox gap={2}>
                        {isDirty && (
                            <PrimaryButton
                                onClick={() =>
                                    reset({
                                        username: username,
                                        gender: gender,
                                        about: about ?? "",
                                    })
                                }
                                sx={{
                                    flexBasis: "content",
                                    px: "30px",
                                    bgcolor: (theme) =>
                                        theme.palette.bgcolor.secondary.active,
                                    ":hover": {
                                        bgcolor: (theme) =>
                                            theme.palette.bgcolor.tertiary.main,
                                    },
                                }}
                            >
                                Сброс
                            </PrimaryButton>
                        )}

                        <PrimaryLoadingButton
                            type="submit"
                            isLoading={isLoading}
                            disabled={!isDirty || !isValid}
                        >
                            Сохранить
                        </PrimaryLoadingButton>
                    </FlexBox>
                )}
            />
        </Form>
    );
};
