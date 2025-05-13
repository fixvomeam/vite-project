import { useState } from 'react'
import styles from './app.module.css'

export const App = () => {
	const [value, setValue] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState('')

	const isValueValid = value.length >= 3 ? true : false

	const onInputButtonClick = () => {
		const promptValue = prompt('Введите значение ').trim()
		if (promptValue.length < 3) setError(`Введенное значение должно содержать минимум 3 символа`)
		else {
			setValue(promptValue)
			setError('')
		}
	}

	const onAddButtonClick = () => {
		console.log(list)
		if (isValueValid) {
			const id = Date.now()
			setList((list) => [...list, { id, value }])
			setError('')
			setValue('')
		}
		console.log(list)
	}

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles[`page - heading`]}>Ввод значения</h1>
				<p className={styles[`no-margin-text`]}>
					Текущее значение <code>value</code>: "<output className={styles[`current-value`]}>{value}</output>"
				</p>
				{error !== '' && <div className={styles.error}>{error}</div>}
				<div className={styles[`buttons-container`]}>
					<button className={styles.button} onClick={onInputButtonClick}>
						Ввести новое
					</button>
					<button className={styles.button} disabled={!isValueValid} onClick={onAddButtonClick}>
						Добавить в список
					</button>
				</div>
				<div className={styles[`list-container`]}>
					<h2 className={styles[`list-heading`]}>Список:</h2>
					<p className={styles[`no-margin-text`]}>Нет добавленных элементов</p>
					<ul className={styles.list}>
						<li className={styles[`list-item`]}>Первый элемент</li>
					</ul>
				</div>
			</div>
		</>
	)
}
