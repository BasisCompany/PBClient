## Typography
Для текста используется компонент **Typography**

Доступные variant: 

| Variant  |   Описание   | Компонент | fontSize | lineHeight | Стили                                          |
| :------: | :----------: | :-------: | :------: | :--------: | :--------------------------------------------- |
|  title   |  Заголовок   |    h3     |    30    |    1.2     | -                                              |
| subtitle | Подзаголовок |    h4     |    20    |    1.15    | -                                              |
|   text   |    Текст     |     p     |    16    |    1.5     | fontWeight: 400,<br>letterSpacing: "0.00938em" |
Пример использования компонента Typography:

```tsx
 <Typography variant="title">
    Заголовок
 </Typography>
```

```tsx
 <Typography variant="text">
    Текст
 </Typography>
```

## LinkTypography

Компонент «LinkTypography» построен на основе компонента «Typography», а это означает, что вы можете использовать его props.

Компонент «LinkTypography» принимает новый props "to", который содержит путь, по которому перейдет пользователь, после нажатия на текст.

Пример использования компонента LinkTypography:

```tsx
<LinkTypography to="/profile" variant="text">  
 Перейти на страницу профиля
</LinkTypography>
```

> Стили по умолчанию:
> ```
> underline: "none"
> color: theme.palette.text.primary,
> ":hover": {
>     color: theme.palette.text.secondary,
> },
> ```

## Цвет текста

| Тип текста | hex    | Цвет                                   |
| ---------- | ------ | -------------------------------------- |
| primary    | FFF    | <span style="color: #FFF;">■</span>    |
| secondary  | d1d1dc | <span style="color: #d1d1dc;">■</span> |
| hover      | 9933FF | <span style="color: #9933FF;">■</span> |
| disabled   | 4d4d4d | <span style="color: #4d4d4d;">■</span> |

> [!INFO]
> У компонентов «Typography» и «LinkTypography» по умолчанию цвет ***text.primary***, а при наведении ***text.secondary***
