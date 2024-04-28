## InputText
**InputText** основан на компоненте **[TextField](https://mui.com/material-ui/react-text-field/)** из material-ui, реализует все его свойства и принимает идентичные пропсы.

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

^4a8b5c

Компонент InputTextPassword основан на компоненте InputText и принимает все его пропсы.

Компонент InputTextPassword добавляет кнопку "показать/скрыть" пароль

Примеры использования компонента InputTextPassword:

```tsx
<InputTextPassword name="password" label="Password" />
```
![[Pasted image 20240427170530.png]]

## InputCheck

Компонент *InputCheck* автоматически отправляет запрос на сервер после ввода символов пользователем. *InputCheck* использует debounce и задержка составляет 1000 мс.

Компонент принимает следующие пропсы:
 - name - уникальное имя поля ввода
 - checkInput - функция мутации из redux/toolkit
 - checkErrorMessage - сообщение, которое будет отображаться при ошибке

Пример использования:
```tsx
<InputCheck
	name="username"
	checkInput={checkUsername}
	checkErrorMessage="Имя пользователя некорректное или уже занято"
/>
```
Компонент основан на компоненте [[#InputText]].
### InputUsername

Для автоматической проверки никнейма пользователя существует специальный компонент *InputUsername*, который отправляет запрос на сервер и проверяет корректность введённого никнейма.  

Пример использования:
```tsx
<InputUsername label="Никнейм" />
```

Если в компонент *InputUsername* передан флаг *counter* и в *inputProps* передана максимальная длина, то в текстовое поле будет показывать счётчик количества символов и будет не больше максимальной введённой длины.

Пример использования с ограничением на количество символов :
```tsx
<InputUsername 
	label="Никнейм" 	
	counter
	inputProps={{ maxLength: 20 }}
/>
```

![[Pasted image 20240428164841.png]]

Компонент основан на компоненте [[#InputCheck]].
### InputEmail

Для автоматической проверки почты пользователя существует специальный компонент *InputEmail*, который отправляет запрос на сервер и проверяет корректность введённой почты.  

Пример использования:
```tsx
<InputEmail label="Почта" />
```

Компонент основан на компоненте [[#InputCheck]].