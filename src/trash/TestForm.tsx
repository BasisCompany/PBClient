import { object, string, InferType } from "yup";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { PrimaryLoadingButton } from "../shared/ui/Buttons/PrimaryButton";
import { Form, ExtSubmitHandler, InputText } from "../shared/ui/Forms";
import { InputTextPassword } from "../shared/ui/Forms/inputs/InputTextPassword";

const loginSchema = object({
    email: string().required(),
    password: string().required(),
});

export type LoginSchema = InferType<typeof loginSchema>;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const TestForm = () => {
    const onSubmit: ExtSubmitHandler<LoginSchema> = async (_data, reset) => {
        await sleep(1000);
        reset();
    };

    return (
        <Form<LoginSchema> onSubmit={onSubmit} schema={loginSchema}>
            <InputText
                name="email"
                label="Email"
                labelIcon={<MailOutlineRoundedIcon />}
            />
            <InputText name="text" label="Text" />
            <InputTextPassword name="password" label="Password" />
            <PrimaryLoadingButton
                type="submit"
                variant="outlined"
                isLoading={false}
            >
                Войти
            </PrimaryLoadingButton>
        </Form>
    );
};
