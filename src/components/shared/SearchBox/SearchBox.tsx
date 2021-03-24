import React, { ChangeEvent, useState } from 'react'
import { Observer } from 'rxjs'

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
		<div>
			<label htmlFor="">Procure o livro:</label>
			<input type="text" value={text} onChange={onChangeText} />
		</div>
	)
}
