Для того чтобы состояние формы компонента [[Form]] было доступно для кнопки в форме используется компонент *FormButton*, который реализует подход - рендер пропсов и принимает компонент кнопки.

Пример использования:
```tsx
<FormButton
	renderButton={({ formState: { isValid } }) => (
	<PrimaryLoadingButton
		type="submit"
		isLoading={isLoading}
		disabled={!isValid}
	>
		Сохранить
	</PrimaryLoadingButton>
	)}
/>
```