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

## InputText

**InputText** основан на компоненте **TextField** из material-ui, реализует все его свойства и принимает идентичные пропсы.

У каждого InputText должно быть уникальное имя, которое указывается в поле name.

Пример использования InputText:
```tsx
<InputText name="email" label="Email" />
```
Компонент InputText поддерживает следующие пропсы:
- helperText - текст, которые отображается под формой, ошибки по умолчанию отображаются в helperText
- labelIcon - иконка, которая находится перед label
- startIcon - иконка, которая находится в начале текстового поля
- endIcon - иконка, которая находится в конце текстового поля
- все пропсы TextField

Примеры использования компонента InputText со пропсами:
```tsx
<InputText
    name="email"
    label="Email"
    labelIcon={<MailOutlineRoundedIcon />} // Mail
    startIcon={<AirportShuttleIcon />} // Car
    endIcon={<AppleIcon />} // Apple
/>
```
![[Pasted image 20240427170247.png]]

```tsx
<InputText
    name="email"
    label="Email"
    labelIcon={<MailOutlineRoundedIcon />} // Mail
/>
```
![[Pasted image 20240427170433.png]]

> [!Warning]
> Не используйте компонент InputText без Form

## InputTextPassword
Компонент InputTextPassword основан на компоненте InputText и принимает все его пропсы.

Компонент InputTextPassword добавляет кнопку "показать/скрыть" пароль

Примеры использования компонента InputTextPassword:

```
<InputTextPassword name="password" label="Password" />
```
![[Pasted image 20240427170530.png]]