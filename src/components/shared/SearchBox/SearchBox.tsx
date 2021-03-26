import { Input } from 'antd'
import Search from 'antd/lib/transfer/search'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Observer } from 'rxjs'
import './SearchBox.scss'

export interface SearchBoxPropTypes {
	textObserver: Observer<string>
}

export function SearchBox({ textObserver }: SearchBoxPropTypes): JSX.Element {
	const [text, setText] = useState('')

	const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setText(value)
		textObserver.next(value)
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
