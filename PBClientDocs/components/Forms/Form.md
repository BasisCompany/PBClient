Используется библиотека react-hook-form и material-ui

## Form
Для работы с формами используется компонент Form, который основан на теге form из html.

Внутри Form используется Context, которые автоматически находит все вложенные поля.

Внутри компонента Form должна присутствовать кнопка с типом "submit", после нажатия на которую будет вызвана функция onSubmit

Пример использования Form:
```tsx
<Form<LoginSchema> onSubmit={onSubmit} schema={loginSchema}>
    <InputText name="text" label="Text" />
     <Button type="submit">
        Войти
    </Button>
</Form>
```

Компонент Form принимает два обязательных пропса: onSubmit и schema, а также все пропсы для тега form из html.

onSubmit - это функция, которая вызовется после нажатия на кнопку Button с типом "submit", при условии, что все поля заполнены верно.

schema - это схема валидатора yup.

##### Проверка формы - Yup
Пример схемы yup:
```tsx
const loginSchema = object({
    email: string().required(),
    password: string().required(),
});
```

Компонент Form является обобщенным компонентом (Generics Component), который принимает тип, содержащий поля формы.

Пример типа для вышестоящей формы:

```tsx
type LoginSchema = InferType<typeof loginSchema>;
// Оба варианта одинаковые
type LoginSchema = {
    email: string;
    password: string;
}
```


> [!Warning] Title
> Избегайте использования вложенных Form

#### Функция onSubmit
Функция onSubmit принимает два параметра: data и reset. В data хранятся все значения из полей, а reset это функция, которая отчищает все поля формы.

В тип ExtSubmitHandler должен передаваться тип из полей с которыми работает компонент Form.
```tsx
const onSubmit: ExtSubmitHandler<LoginSchema> = async (data, reset) => {
    console.log("data:", data);
    reset();
};
```

## Inputs
Для ввода текста используются следующие компоненты:
- [[InputText#InputText | InputText ]]
- [[InputText#InputTextPassword | InputTextPassword]]
- [[InputText#InputCheck| InputCheck ]]
- [[Select]]
