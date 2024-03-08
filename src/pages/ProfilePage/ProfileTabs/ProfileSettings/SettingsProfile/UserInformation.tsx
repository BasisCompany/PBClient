import { InferType, object } from "yup";
import { ExtSubmitHandler, Form, InputText } from "@/shared/ui/Forms";
import { PrimaryLoadingButton } from "@/shared/ui/Buttons/PrimaryButton";
import { useProfileUser } from "@/entities/user";

const changeUserInformation = object({});

export type ChangeUserInformation = InferType<typeof changeUserInformation>;

export const UserInformation = () => {
    const { username } = useProfileUser();

    const onSubmit: ExtSubmitHandler<ChangeUserInformation> = () => {
        //TODO: Карточка с значком успешно
    };
    return (
        <Form<ChangeUserInformation>
            onSubmit={onSubmit}
            schema={changeUserInformation}
        >
            <InputText name="email" label="Почта" value={"todo email"} />
            <InputText name="username" label="Никнейм" value={username} />
            <InputText name="gender" label="Гендер" />
            <InputText name="about" label="О себе" />
            <PrimaryLoadingButton type="submit" isLoading={false}>
                Сохранить
            </PrimaryLoadingButton>
        </Form>
    );
};
