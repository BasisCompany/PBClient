import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import { Form, ExtSubmitHandler, InputTextPassword } from "@/shared/ui/Forms";
import { toaster } from "@/app/providers/Toast";
import { useUpdatePasswordMutation } from "@/entities/user";
import { ChangePasswordSchema, changePasswordSchema } from "@/shared/schema";

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
