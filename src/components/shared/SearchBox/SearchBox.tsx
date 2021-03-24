import React, { useState } from 'react'

export function SearchBox(): JSX.Element {
	const [text, setText] = useState('')
	return (
		<div>
			<label htmlFor="">Procure o livro:</label>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
		</div>
	)
}
