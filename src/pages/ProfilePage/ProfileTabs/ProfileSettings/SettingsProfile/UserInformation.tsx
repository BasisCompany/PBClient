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
import { useProfileUser, useUpdateProfileMutation } from "@/entities/user";
import { toaster } from "@/app/providers/Toast";
import { FlexBox } from "@/shared/ui/FlexBox";
import { ChangeUserInformation, changeUserInformation } from "@/shared/schema";

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
