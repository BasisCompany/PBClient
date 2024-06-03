import { object, string, ref, InferType } from "yup";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import { Form, ExtSubmitHandler, InputTextPassword } from "@/shared/ui/Forms";
import { toaster } from "@/app/providers/Toast";
import { useUpdatePasswordMutation } from "@/entities/user";

const changePasswordSchema = object({
    oldPassword: string()
        .required("Пожалуйста, укажите свой старый пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    newPassword: string()
        .required("Пожалуйста, укажите новый пароль.")
        .min(8, "Пароль должен быть больше 8 символов")
        .max(35, "Пароль должен быть меньше 35 символов"),
    newPasswordConfirm: string()
        .required("Пожалуйста, подтвердите новый пароль.")
        .oneOf([ref("newPassword")], "Пароли должны совпадать"),
});

export type ChangePasswordSchema = InferType<typeof changePasswordSchema>;

export const SettingsChangePassword = () => {
    const [updatePassword] = useUpdatePasswordMutation();

    const onSubmit: ExtSubmitHandler<ChangePasswordSchema> = async (
        data,
        { reset }
    ) => {
        try {
            await updatePassword({
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            }).unwrap();
            reset();
            toaster.success("Пароль успешно обновлен!");
        } catch (error) {
            /* empty */
        }
    };

    return (
        <Form<ChangePasswordSchema>
            onSubmit={onSubmit}
            schema={changePasswordSchema}
        >
            <InputTextPassword name="oldPassword" label="Старый пароль" />
            <InputTextPassword name="newPassword" label="Новый пароль" />
            <InputTextPassword
                name="newPasswordConfirm"
                label="Подтвердите пароль"
            />
            <PrimaryLoadingButton type="submit" isLoading={false}>
                Сохранить
            </PrimaryLoadingButton>
        </Form>
    );
};
