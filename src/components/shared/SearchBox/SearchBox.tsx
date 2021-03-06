import { Input } from 'antd'
import { useSubject } from 'hooks'
import React, { ChangeEvent, useState } from 'react'
import './SearchBox.scss'

export function SearchBox(): JSX.Element {
	const [text, setText] = useState('')
	const textSubject = useSubject('Book', 'BookTextChange')

	const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setText(value)
		textSubject.next(value)
	}

	return (
		<div className="SearchBox">
			<Input.Search
				type="text"
				value={text}
				onChange={onChangeText}
				placeholder="procure o livro aqui"
			/>
		</div>
	)
}
